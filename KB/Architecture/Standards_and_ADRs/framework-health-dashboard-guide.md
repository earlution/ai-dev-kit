---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-06T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Health Dashboard Guide

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2025-12-06  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 3 - Framework Health Monitoring  
**Task:** E6:S03:T03 - Build framework health dashboards

---

## Executive Summary

This guide explains how to generate and use the framework health dashboard, a markdown-based visualization of framework health metrics.

**Key Features:**
- Markdown-based dashboard (easy to view in GitHub, IDEs, etc.)
- Comprehensive health overview with category breakdowns
- Framework comparison and ranking
- Summary statistics
- Automated generation from health metrics data

---

## Quick Start

### Generate Dashboard

```bash
# Step 1: Collect health metrics
python3 scripts/framework-management/collect-health-metrics.py \
  --output health-report.json

# Step 2: Generate dashboard
python3 scripts/framework-management/generate-health-dashboard.py \
  --input health-report.json \
  --output KB/PM_and_Portfolio/framework-health-dashboard.md
```

### View Dashboard

The dashboard is a markdown file that can be viewed:
- In GitHub (rendered automatically)
- In your IDE/editor (with markdown preview)
- In any markdown viewer

---

## Dashboard Components

### 1. Summary Section

**Overview Statistics:**
- Total frameworks analyzed
- Average health score
- Minimum and maximum scores
- Health status distribution (Excellent/Good/Fair/Poor counts)

**Example:**
```markdown
## Summary

**Total Frameworks:** 5

**Health Score Statistics:**
- Average: **85.2%** 🟡
- Minimum: **72.1%** 🟡
- Maximum: **92.5%** 🟢

**Health Status Distribution:**
- 🟢 Excellent (90-100%): 2
- 🟡 Good (70-89%): 3
- 🟠 Fair (50-69%): 0
- 🔴 Poor (<50%): 0
```

### 2. Framework Health Reports

**Individual Framework Sections:**
- Overall health score and status
- Category breakdown table (scores, weights, weighted scores)
- Detailed metrics for each category
- Improvement recommendations

**Example:**
```markdown
### workflow-mgt (v2.0.0)

**Overall Health:** **92.5%** 🟢 - 🟢 **EXCELLENT**

#### Category Breakdown

| Category | Score | Weight | Weighted Score |
|----------|-------|--------|----------------|
| Documentation | **95.0%** 🟢 | 25% | 23.8% |
| Version Management | **100.0%** 🟢 | 15% | 15.0% |
| Maintenance | **90.0%** 🟢 | 20% | 18.0% |
| Usability | **90.0%** 🟢 | 15% | 13.5% |
| Integration | **85.0%** 🟡 | 10% | 8.5% |
| Code Quality | **95.0%** 🟢 | 10% | 9.5% |
| Adoption | **80.0%** 🟡 | 5% | 4.0% |

#### Details

**Documentation:**
- Completeness: 95.0%
- All required documentation present ✅

**Version Management:**
- Version tracked ✅
- SemVer format ✅
- Release tagged (15 tags) ✅
- Changelog present ✅

**Maintenance:**
- Status: active
- Last update: 5 days ago
- Update frequency: 2.3 commits/week
...
```

### 3. Legend

**Health Status Definitions:**
- 🟢 **Excellent (90-100%):** Production-ready, well-documented, ready for external adoption
- 🟡 **Good (70-89%):** Usable, minor improvements needed, suitable for adoption with guidance
- 🟠 **Fair (50-69%):** Functional, significant improvements needed, not recommended for external adoption
- 🔴 **Poor (<50%):** Needs major work, not ready for use, requires immediate attention

### 4. Health Score Calculation

**Formula Explanation:**
- Documentation (25%) + Version Management (15%) + Maintenance (20%) + Usability (15%) + Integration (10%) + Code Quality (10%) + Adoption (5%)

---

## Usage Workflows

### Regular Dashboard Updates

**Weekly Dashboard Generation:**
```bash
#!/bin/bash
# Generate weekly health dashboard

# Collect metrics
python3 scripts/framework-management/collect-health-metrics.py \
  --output health-report-$(date +%Y%m%d).json

# Generate dashboard
python3 scripts/framework-management/generate-health-dashboard.py \
  --input health-report-$(date +%Y%m%d).json \
  --output KB/PM_and_Portfolio/framework-health-dashboard.md

# Commit dashboard update
git add KB/PM_and_Portfolio/framework-health-dashboard.md
git commit -m "Update framework health dashboard"
```

**Monthly Comprehensive Review:**
```bash
# Collect comprehensive metrics
python3 scripts/framework-management/collect-health-metrics.py \
  --output monthly-health-report.json

# Generate dashboard
python3 scripts/framework-management/generate-health-dashboard.py \
  --input monthly-health-report.json \
  --output KB/PM_and_Portfolio/framework-health-dashboard.md

# Review dashboard and identify improvement areas
cat KB/PM_and_Portfolio/framework-health-dashboard.md
```

### Framework-Specific Analysis

**Before Framework Release:**
```bash
# Check specific framework
python3 scripts/framework-management/collect-health-metrics.py \
  --framework packages/frameworks/workflow\ mgt/ \
  --output pre-release-health.json

# Generate dashboard
python3 scripts/framework-management/generate-health-dashboard.py \
  --input pre-release-health.json \
  --output pre-release-dashboard.md

# Review dashboard
cat pre-release-dashboard.md
```

### CI/CD Integration

**Automated Dashboard Generation:**
```yaml
name: Framework Health Dashboard

on:
  schedule:
    - cron: '0 0 * * 0'  # Weekly
  workflow_dispatch:

jobs:
  generate-dashboard:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Collect Health Metrics
        run: |
          python3 scripts/framework-management/collect-health-metrics.py \
            --output health-report.json
      
      - name: Generate Dashboard
        run: |
          python3 scripts/framework-management/generate-health-dashboard.py \
            --input health-report.json \
            --output KB/PM_and_Portfolio/framework-health-dashboard.md
      
      - name: Commit Dashboard
        run: |
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add KB/PM_and_Portfolio/framework-health-dashboard.md
          git commit -m "Update framework health dashboard" || exit 0
          git push
```

---

## Interpreting the Dashboard

### Overall Health Score

**Excellent (90-100%):**
- Framework is production-ready
- Well-documented and maintained
- Ready for external adoption
- All categories scoring well

**Good (70-89%):**
- Framework is usable
- Minor improvements needed in some categories
- Suitable for adoption with guidance
- Most categories scoring well

**Fair (50-69%):**
- Framework is functional
- Significant improvements needed
- Not recommended for external adoption
- Multiple categories need attention

**Poor (<50%):**
- Framework needs major work
- Not ready for use
- Requires immediate attention
- Critical categories failing

### Category Analysis

**Documentation (25% weight):**
- Check completeness percentage
- Review missing documentation list
- Verify quality indicators

**Version Management (15% weight):**
- Verify version tracking
- Check SemVer compliance
- Review release tagging
- Validate changelog presence

**Maintenance (20% weight):**
- Check maintenance status (active/maintenance_mode/deprecated)
- Review update frequency
- Verify last update date
- Check breaking changes documentation

**Usability (15% weight):**
- Review template count
- Check example availability
- Verify documentation clarity

**Integration (10% weight):**
- Check integration guide count
- Verify integration status
- Review compatibility information

**Code Quality (10% weight):**
- Review script count
- Check validation presence
- Verify error handling

**Adoption (5% weight):**
- Check usage examples
- Review external adoption evidence
- Verify community feedback

---

## Dashboard Customization

### Custom Output Location

```bash
# Generate dashboard in custom location
python3 scripts/framework-management/generate-health-dashboard.py \
  --input health-report.json \
  --output docs/frameworks/health-dashboard.md
```

### Filtering Frameworks

Edit the dashboard generator script to filter frameworks by:
- Health status (excellent/good/fair/poor)
- Minimum health score
- Framework name pattern
- Specific categories

---

## Troubleshooting

### Dashboard Generation Errors

**Input File Not Found:**
```bash
# Ensure health metrics are collected first
python3 scripts/framework-management/collect-health-metrics.py \
  --output health-report.json

# Then generate dashboard
python3 scripts/framework-management/generate-health-dashboard.py \
  --input health-report.json
```

**Empty Dashboard:**
- Check that health metrics file contains framework data
- Verify frameworks were analyzed successfully
- Check for errors in health metrics collection

**Missing Category Data:**
- Ensure all health check scripts are working
- Verify framework structure matches expectations
- Check for errors in individual health checks

---

## Dashboard Maintenance

### Regular Updates

**Recommended Frequency:**
- **Weekly:** Automated dashboard generation
- **Monthly:** Comprehensive review and analysis
- **Quarterly:** Strategic health assessment
- **As Needed:** Before framework releases

### Dashboard History

**Version Control:**
- Dashboard is a markdown file (tracked in Git)
- Historical versions available via Git history
- Can compare dashboards over time

**Archive Old Dashboards:**
```bash
# Archive monthly dashboards
mkdir -p KB/PM_and_Portfolio/dashboard-archive
cp KB/PM_and_Portfolio/framework-health-dashboard.md \
   KB/PM_and_Portfolio/dashboard-archive/dashboard-$(date +%Y%m).md
```

---

## References

- **Health Metrics Definition:** `KB/Architecture/Standards_and_ADRs/framework-health-metrics.md`
- **Monitoring Guide:** `KB/Architecture/Standards_and_ADRs/framework-health-monitoring-guide.md`
- **Health Metrics Collector:** `scripts/framework-management/collect-health-metrics.py`
- **Dashboard Generator:** `scripts/framework-management/generate-health-dashboard.py`
- **Epic 6:** `KB/PM_and_Portfolio/kanban/epics/Epic-6/Epic-6.md`
- **Story 3:** `KB/PM_and_Portfolio/kanban/epics/Epic-6/Story-003-framework-health-monitoring.md`

---

## Decision Record

**Decision:** Implement markdown-based health dashboard with automated generation.

**Rationale:**
- Markdown is universally viewable (GitHub, IDEs, editors)
- No external dependencies or rendering requirements
- Easy to version control and track changes
- Simple to generate and maintain
- Supports comprehensive health visualization
- Enables framework comparison and ranking

