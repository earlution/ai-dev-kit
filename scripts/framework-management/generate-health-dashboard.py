#!/usr/bin/env python3
"""
Framework Health Dashboard Generator

Generates a markdown-based health dashboard from collected health metrics.

Usage:
    python3 generate-health-dashboard.py [--input <metrics_file>] [--output <dashboard_file>]
    python3 generate-health-dashboard.py --input health-report.json --output dashboard.md
"""

import os
import sys
import json
import argparse
from pathlib import Path
from datetime import datetime
from typing import Dict, List

# Health status emoji mapping
STATUS_EMOJI = {
    'excellent': '🟢',
    'good': '🟡',
    'fair': '🟠',
    'poor': '🔴',
}

# Health status color mapping (for badges)
STATUS_COLOR = {
    'excellent': 'brightgreen',
    'good': 'yellow',
    'fair': 'orange',
    'poor': 'red',
}


def format_score(score: float) -> str:
    """Format score with color indicator."""
    if score >= 90:
        return f"**{score:.1f}%** 🟢"
    elif score >= 70:
        return f"**{score:.1f}%** 🟡"
    elif score >= 50:
        return f"**{score:.1f}%** 🟠"
    else:
        return f"**{score:.1f}%** 🔴"


def format_status(status: str) -> str:
    """Format status with emoji."""
    emoji = STATUS_EMOJI.get(status, '⚪')
    return f"{emoji} **{status.upper()}**"


def generate_framework_section(framework: Dict) -> str:
    """Generate markdown section for a single framework."""
    name = framework.get('framework', 'Unknown')
    version = framework.get('version', 'unknown')
    health_score = framework.get('health_score', 0)
    status = framework.get('status', 'unknown')
    
    # Category scores
    doc_score = framework.get('documentation', {}).get('score', 0)
    version_score = framework.get('version_management', {}).get('score', 0)
    maint_score = framework.get('maintenance', {}).get('score', 0)
    usability_score = framework.get('usability', {}).get('score', 0)
    integration_score = framework.get('integration', {}).get('score', 0)
    code_score = framework.get('code_quality', {}).get('score', 0)
    adoption_score = framework.get('adoption', {}).get('score', 0)
    
    section = f"""### {name} (v{version})

**Overall Health:** {format_score(health_score)} - {format_status(status)}

#### Category Breakdown

| Category | Score | Weight | Weighted Score |
|----------|-------|--------|----------------|
| Documentation | {format_score(doc_score)} | 25% | {doc_score * 0.25:.1f}% |
| Version Management | {format_score(version_score)} | 15% | {version_score * 0.15:.1f}% |
| Maintenance | {format_score(maint_score)} | 20% | {maint_score * 0.20:.1f}% |
| Usability | {format_score(usability_score)} | 15% | {usability_score * 0.15:.1f}% |
| Integration | {format_score(integration_score)} | 10% | {integration_score * 0.10:.1f}% |
| Code Quality | {format_score(code_score)} | 10% | {code_score * 0.10:.1f}% |
| Adoption | {format_score(adoption_score)} | 5% | {adoption_score * 0.05:.1f}% |

#### Details

**Documentation:**
"""
    
    # Documentation details
    doc_metrics = framework.get('documentation', {})
    if 'completeness' in doc_metrics:
        section += f"- Completeness: {doc_metrics.get('completeness', 0):.1f}%\n"
    if 'missing_docs' in doc_metrics:
        missing = doc_metrics.get('missing_docs', [])
        if missing:
            section += f"- Missing docs: {', '.join(missing)}\n"
        else:
            section += "- All required documentation present ✅\n"
    
    # Version management details
    section += "\n**Version Management:**\n"
    version_metrics = framework.get('version_management', {})
    if version_metrics.get('version_tracked'):
        section += "- Version tracked ✅\n"
    if version_metrics.get('version_format') == 'semver':
        section += "- SemVer format ✅\n"
    if version_metrics.get('release_tagged'):
        section += f"- Release tagged ({version_metrics.get('tag_count', 0)} tags) ✅\n"
    if version_metrics.get('changelog'):
        section += "- Changelog present ✅\n"
    
    # Maintenance details
    section += "\n**Maintenance:**\n"
    maint_metrics = framework.get('maintenance', {})
    maint_status = maint_metrics.get('maintenance_status', 'unknown')
    section += f"- Status: {maint_status}\n"
    if maint_metrics.get('last_update'):
        days = maint_metrics.get('days_since_update', 0)
        section += f"- Last update: {days} days ago\n"
    if maint_metrics.get('update_frequency'):
        freq = maint_metrics.get('update_frequency', 0)
        section += f"- Update frequency: {freq:.1f} commits/week\n"
    
    # Usability details
    section += "\n**Usability:**\n"
    usability_metrics = framework.get('usability', {})
    template_count = usability_metrics.get('template_count', 0)
    example_count = usability_metrics.get('example_count', 0)
    section += f"- Templates: {template_count}\n"
    section += f"- Examples: {example_count}\n"
    
    # Integration details
    section += "\n**Integration:**\n"
    integration_metrics = framework.get('integration', {})
    guide_count = integration_metrics.get('integration_guides', 0)
    section += f"- Integration guides: {guide_count}\n"
    
    # Code quality details
    section += "\n**Code Quality:**\n"
    code_metrics = framework.get('code_quality', {})
    script_count = code_metrics.get('script_count', 0)
    section += f"- Scripts: {script_count}\n"
    
    # Adoption details
    section += "\n**Adoption:**\n"
    adoption_metrics = framework.get('adoption', {})
    usage_examples = adoption_metrics.get('usage_examples', 0)
    section += f"- Usage examples: {usage_examples}\n"
    
    section += "\n---\n\n"
    
    return section


def generate_summary_section(summary: Dict) -> str:
    """Generate summary section."""
    total = summary.get('total_frameworks', 0)
    avg_score = summary.get('average_score', 0)
    min_score = summary.get('min_score', 0)
    max_score = summary.get('max_score', 0)
    excellent = summary.get('excellent_count', 0)
    good = summary.get('good_count', 0)
    fair = summary.get('fair_count', 0)
    poor = summary.get('poor_count', 0)
    
    section = f"""## Summary

**Total Frameworks:** {total}

**Health Score Statistics:**
- Average: {format_score(avg_score)}
- Minimum: {format_score(min_score)}
- Maximum: {format_score(max_score)}

**Health Status Distribution:**
- {STATUS_EMOJI['excellent']} Excellent (90-100%): {excellent}
- {STATUS_EMOJI['good']} Good (70-89%): {good}
- {STATUS_EMOJI['fair']} Fair (50-69%): {fair}
- {STATUS_EMOJI['poor']} Poor (<50%): {poor}

---

"""
    
    return section


def generate_dashboard(data: Dict) -> str:
    """Generate complete dashboard markdown."""
    collected_at = data.get('collected_at', datetime.now().isoformat())
    frameworks = data.get('frameworks', [])
    summary = data.get('summary', {})
    
    # Sort frameworks by health score (descending)
    frameworks_sorted = sorted(
        [f for f in frameworks if 'error' not in f],
        key=lambda x: x.get('health_score', 0),
        reverse=True
    )
    
    dashboard = f"""# Framework Health Dashboard

**Generated:** {collected_at}  
**Last Updated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S UTC')}

---

"""
    
    # Summary section
    if summary:
        dashboard += generate_summary_section(summary)
    
    # Framework sections
    dashboard += "## Framework Health Reports\n\n"
    
    for framework in frameworks_sorted:
        dashboard += generate_framework_section(framework)
    
    # Footer
    dashboard += f"""## Legend

- 🟢 **Excellent (90-100%):** Production-ready, well-documented, ready for external adoption
- 🟡 **Good (70-89%):** Usable, minor improvements needed, suitable for adoption with guidance
- 🟠 **Fair (50-69%):** Functional, significant improvements needed, not recommended for external adoption
- 🔴 **Poor (<50%):** Needs major work, not ready for use, requires immediate attention

---

## Health Score Calculation

Overall Health Score = (
    Documentation Health × 0.25 +
    Version Management Health × 0.15 +
    Maintenance Health × 0.20 +
    Usability Health × 0.15 +
    Integration Health × 0.10 +
    Code Quality Health × 0.10 +
    Adoption Health × 0.05
)

---

**Dashboard generated by:** `scripts/framework-management/generate-health-dashboard.py`  
**Health metrics source:** `scripts/framework-management/collect-health-metrics.py`  
**See:** `KB/Architecture/Standards_and_ADRs/framework-health-metrics.md` for complete health metrics definition
"""
    
    return dashboard


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(description='Generate framework health dashboard')
    parser.add_argument(
        '--input',
        type=str,
        default='health-report.json',
        help='Input health metrics JSON file (default: health-report.json)'
    )
    parser.add_argument(
        '--output',
        type=str,
        default='KB/PM_and_Portfolio/framework-health-dashboard.md',
        help='Output dashboard markdown file (default: KB/PM_and_Portfolio/framework-health-dashboard.md)'
    )
    
    args = parser.parse_args()
    
    # Read input file
    input_path = Path(args.input)
    if not input_path.exists():
        print(f"Error: Input file not found: {input_path}", file=sys.stderr)
        sys.exit(1)
    
    with open(input_path, 'r') as f:
        data = json.load(f)
    
    # Generate dashboard
    dashboard = generate_dashboard(data)
    
    # Write output file
    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    with open(output_path, 'w') as f:
        f.write(dashboard)
    
    print(f"Dashboard generated: {output_path}")
    print(f"Frameworks analyzed: {len(data.get('frameworks', []))}")


if __name__ == '__main__':
    main()

