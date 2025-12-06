---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-06T19:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Health Monitoring Guide

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2025-12-06  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 3 - Framework Health Monitoring  
**Task:** E6:S03:T02 - Implement health monitoring tools

---

## Executive Summary

This guide explains how to use the framework health monitoring tools to assess and track the health of framework packages in the vibe-dev-kit repository.

**Key Tools:**
- `check-documentation.py` - Check documentation completeness
- `check-versioning.py` - Check version management
- `check-maintenance.py` - Check maintenance status
- `collect-health-metrics.py` - Collect comprehensive health metrics

---

## Quick Start

### Collect Health Metrics for All Frameworks

```bash
# Collect metrics for all frameworks (JSON output)
python3 scripts/framework-management/collect-health-metrics.py

# Save to file
python3 scripts/framework-management/collect-health-metrics.py --output health-report.json

# YAML output
python3 scripts/framework-management/collect-health-metrics.py --format yaml --output health-report.yaml
```

### Check a Specific Framework

```bash
# Check specific framework
python3 scripts/framework-management/collect-health-metrics.py \
  --framework packages/frameworks/workflow\ mgt/
```

### Run Individual Checks

```bash
# Check documentation
python3 scripts/framework-management/check-documentation.py \
  packages/frameworks/workflow\ mgt/

# Check versioning
python3 scripts/framework-management/check-versioning.py \
  packages/frameworks/workflow\ mgt/

# Check maintenance
python3 scripts/framework-management/check-maintenance.py \
  packages/frameworks/workflow\ mgt/
```

---

## Tool Descriptions

### 1. check-documentation.py

**Purpose:** Check documentation completeness for a framework.

**Checks:**
- Required documentation files (README.md, PACKAGE_OVERVIEW.md)
- Optional documentation files (IMPLEMENTATION_GUIDE.md)
- Documentation directories (templates/, examples/, integration/, etc.)
- Documentation quality (content, structure, metadata)

**Output:**
- JSON with documentation completeness score (0-100)
- Missing documentation files
- Quality issues

**Example:**
```bash
python3 scripts/framework-management/check-documentation.py \
  packages/frameworks/workflow\ mgt/
```

**Score Calculation:**
- Required docs: 70% weight
- Optional docs: 20% weight
- Directories: 10% weight
- Quality penalty: -5 points per quality issue

---

### 2. check-versioning.py

**Purpose:** Check version management health for a framework.

**Checks:**
- Version tracking (version files, README version)
- Version format (SemVer compliance)
- Release tags (Git tags)
- Changelog presence and content

**Output:**
- JSON with version management score (0-100)
- Version information
- Tag count
- Changelog status

**Example:**
```bash
python3 scripts/framework-management/check-versioning.py \
  packages/frameworks/workflow\ mgt/
```

**Score Calculation:**
- Version tracked: 30 points
- SemVer format: 20 points
- Release tagged: 20 points
- Changelog: 20 points (+10 bonus for content)

---

### 3. check-maintenance.py

**Purpose:** Check maintenance status for a framework.

**Checks:**
- Last update date (Git commit history)
- Update frequency (commits per week)
- Deprecation status (README deprecation notices)
- Breaking changes documentation

**Output:**
- JSON with maintenance score (0-100)
- Maintenance status (active/maintenance_mode/deprecated)
- Update frequency
- Days since last update

**Example:**
```bash
python3 scripts/framework-management/check-maintenance.py \
  packages/frameworks/workflow\ mgt/
```

**Score Calculation:**
- Maintenance status: 40 points (active=40, mode=25, deprecated=0)
- Update frequency: 30 points
- Recent update: 20 points
- Breaking changes documented: 10 points

---

### 4. collect-health-metrics.py

**Purpose:** Collect comprehensive health metrics for one or all frameworks.

**Features:**
- Runs all individual checks
- Calculates overall health score using weighted formula
- Determines health status (Excellent/Good/Fair/Poor)
- Generates summary statistics

**Options:**
- `--framework <path>` - Check specific framework
- `--output <file>` - Save output to file
- `--format json|yaml` - Output format
- `--frameworks-dir <path>` - Frameworks directory (default: packages/frameworks)

**Example:**
```bash
# All frameworks
python3 scripts/framework-management/collect-health-metrics.py \
  --output health-report.json

# Specific framework
python3 scripts/framework-management/collect-health-metrics.py \
  --framework packages/frameworks/workflow\ mgt/ \
  --format yaml
```

**Output Structure:**
```json
{
  "frameworks": [
    {
      "framework": "workflow mgt",
      "version": "2.0.0",
      "health_score": 92,
      "status": "excellent",
      "documentation": { "score": 95, ... },
      "version_management": { "score": 100, ... },
      "maintenance": { "score": 90, ... },
      "usability": { "score": 90, ... },
      "integration": { "score": 85, ... },
      "code_quality": { "score": 95, ... },
      "adoption": { "score": 80, ... }
    }
  ],
  "summary": {
    "total_frameworks": 5,
    "average_score": 85.2,
    "excellent_count": 3,
    "good_count": 2
  }
}
```

---

## Health Score Calculation

### Overall Health Score Formula

```
Overall Health = (
    Documentation Health × 0.25 +
    Version Management Health × 0.15 +
    Maintenance Health × 0.20 +
    Usability Health × 0.15 +
    Integration Health × 0.10 +
    Code Quality Health × 0.10 +
    Adoption Health × 0.05
)
```

### Health Status Levels

- **Excellent (90-100%):** Production-ready, well-documented, ready for external adoption
- **Good (70-89%):** Usable, minor improvements needed, suitable for adoption with guidance
- **Fair (50-69%):** Functional, significant improvements needed, not recommended for external adoption
- **Poor (<50%):** Needs major work, not ready for use, requires immediate attention

---

## Usage Workflows

### Regular Health Checks

**Weekly Automated Check:**
```bash
# Run health check and save results
python3 scripts/framework-management/collect-health-metrics.py \
  --output health-report-$(date +%Y%m%d).json

# Review results
cat health-report-*.json | jq '.summary'
```

**Monthly Comprehensive Review:**
```bash
# Collect metrics
python3 scripts/framework-management/collect-health-metrics.py \
  --output monthly-health-report.json

# Check individual frameworks
for framework in packages/frameworks/*/; do
  echo "Checking $framework"
  python3 scripts/framework-management/collect-health-metrics.py \
    --framework "$framework"
done
```

### Framework-Specific Checks

**Before Framework Release:**
```bash
# Check all health metrics
python3 scripts/framework-management/collect-health-metrics.py \
  --framework packages/frameworks/workflow\ mgt/ \
  --output pre-release-health.json

# Verify health score is >= 70 (Good)
cat pre-release-health.json | jq '.frameworks[0].health_score'
```

**After Framework Update:**
```bash
# Check maintenance status
python3 scripts/framework-management/check-maintenance.py \
  packages/frameworks/workflow\ mgt/

# Verify documentation is updated
python3 scripts/framework-management/check-documentation.py \
  packages/frameworks/workflow\ mgt/
```

---

## Interpreting Results

### Documentation Health

**Score 90-100 (Excellent):**
- All required docs present
- High-quality content
- Comprehensive examples and templates

**Score 70-89 (Good):**
- Most docs present
- Minor gaps in content
- Some examples available

**Score 50-69 (Fair):**
- Core docs present
- Significant gaps
- Limited examples

**Score <50 (Poor):**
- Missing critical documentation
- Low-quality content
- No examples

### Version Management Health

**Score 90-100 (Excellent):**
- Version tracked and SemVer compliant
- Release tags present
- Comprehensive changelog

**Score 70-89 (Good):**
- Version tracked
- Some release tags
- Basic changelog

**Score 50-69 (Fair):**
- Version tracked but not SemVer
- Few or no tags
- Minimal changelog

**Score <50 (Poor):**
- No version tracking
- No release tags
- No changelog

### Maintenance Health

**Score 90-100 (Excellent):**
- Recently updated (<90 days)
- Active maintenance (weekly commits)
- Breaking changes documented

**Score 70-89 (Good):**
- Updated within 6 months
- Regular maintenance
- Some documentation

**Score 50-69 (Fair):**
- Updated within year
- Minimal maintenance
- Limited documentation

**Score <50 (Poor):**
- Outdated (>1 year)
- No active maintenance
- No documentation

---

## Troubleshooting

### Script Errors

**Import Errors:**
```bash
# Ensure scripts are executable
chmod +x scripts/framework-management/*.py

# Run with Python 3
python3 scripts/framework-management/collect-health-metrics.py
```

**Git Errors:**
- Scripts require Git repository
- Ensure you're in the repository root
- Git history must be available

**Path Errors:**
- Use absolute or relative paths from repository root
- Framework paths should point to framework directories
- Check that framework directories exist

### Low Health Scores

**Documentation Issues:**
- Add missing README.md or PACKAGE_OVERVIEW.md
- Improve documentation quality (add content, structure)
- Add examples and templates

**Version Management Issues:**
- Add version tracking (version file or README version)
- Use SemVer format (MAJOR.MINOR.PATCH)
- Create release tags
- Add changelog

**Maintenance Issues:**
- Update framework regularly
- Document breaking changes
- Maintain active development

---

## Integration with CI/CD

### GitHub Actions Example

```yaml
name: Framework Health Check

on:
  schedule:
    - cron: '0 0 * * 0'  # Weekly
  workflow_dispatch:

jobs:
  health-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Collect Health Metrics
        run: |
          python3 scripts/framework-management/collect-health-metrics.py \
            --output health-report.json
      
      - name: Upload Results
        uses: actions/upload-artifact@v3
        with:
          name: health-report
          path: health-report.json
      
      - name: Check Health Threshold
        run: |
          python3 -c "
          import json
          with open('health-report.json') as f:
            data = json.load(f)
          scores = [f['health_score'] for f in data['frameworks'] if 'error' not in f]
          avg = sum(scores) / len(scores)
          if avg < 70:
            print(f'Average health score {avg} is below threshold (70)')
            exit(1)
          "
```

---

## References

- **Health Metrics Definition:** `KB/Architecture/Standards_and_ADRs/framework-health-metrics.md`
- **Framework Packages:** `packages/frameworks/`
- **Epic 6:** `KB/PM_and_Portfolio/kanban/epics/Epic-6/Epic-6.md`
- **Story 3:** `KB/PM_and_Portfolio/kanban/epics/Epic-6/Story-003-framework-health-monitoring.md`

---

## Decision Record

**Decision:** Implement Python-based health monitoring tools with JSON/YAML output.

**Rationale:**
- Python provides cross-platform compatibility
- JSON/YAML output enables integration with other tools
- Individual check scripts allow targeted analysis
- Collector script provides comprehensive overview
- Weighted scoring aligns with health metrics definition

