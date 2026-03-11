---
name: rw-execute
description: Executes Release Workflow steps autonomously with proper agent coordination
---

## Release Workflow Execution

### Step Coordination
1. Use RW Agent for overall workflow coordination
2. Use Validation Agent for branch safety checks
3. Use Documentation Agent for changelog and README updates
4. Use Git Operations skills for version control

### Step Sequence

Follow the 17-step RW process:

**Step 1: Branch Safety Check**
- Invoke Validation Agent for branch_safety_check skill
- Verify current branch context and safety
- Check for uncommitted changes

**Step 2: Bump Version**
- Use version-bump skill for version file updates
- Update src/fynd_deals/version.py with new version
- Validate version schema compliance

**Step 3: Create Detailed Changelog**
- Use changelog_create skill for detailed changelog
- Create changelog entry in archive directory
- Document all changes and context

**Step 4: Update Main Changelog**
- Use changelog_manage skill for main changelog
- Update CHANGELOG.md with new version entry
- Ensure consistency with detailed changelog

**Step 5: Update README**
- Use readme_update skill for README changes
- Update version information in README.md
- Maintain consistent version references

**Step 6: Auto-update Kanban Docs**
- Invoke UKW Agent for kanban synchronization
- Update task status and documentation
- Maintain kanban board consistency

**Step 7: Stage Files**
- Use git-status skill for file staging
- Stage all modified files for commit
- Verify file changes

**Step 8: Check IDE Problems**
- Use validation skills for IDE checks
- Check for syntax errors and issues
- Validate file integrity

**Step 9: Run Validators**
- Use validation skills for script execution
- Run validation scripts from workflow framework
- Ensure compliance with standards

**Step 10: Commit Changes**
- Use git-commit skill for commit operations
- Create commit with standardized message
- Verify commit success

**Step 11: Post-Commit Verification**
- Use validation skills for post-commit checks
- Verify repository state after commit
- Check for any issues

**Step 12: Push to Remote**
- Use git-push skill for remote operations
- Push changes to remote repository
- Verify push success

**Step 13: Check for PIR Trigger**
- Use workflow-check skill for PIR evaluation
- Check Epic/Story COMPLETE status
- Trigger PIR workflow if appropriate

**Step 14: Act on Verification Results**
- Use validation skills for result processing
- Address any verification issues
- Ensure workflow completion

**Step 15: Create/Update GitHub Release**
- Use release-create skill for GitHub operations
- Create or update GitHub release
- Use SemVer tags for release

**Step 16: Housekeeping**
- Use cleanup skill for IDE maintenance
- Clear IDE todo list
- Clean temporary files

**Step 17: Final Verification**
- Use validation skills for final checks
- Verify workflow completion
- Document success status

### Error Handling

- Validate each step before proceeding
- Provide clear error messages and recovery steps
- Allow manual intervention when automation fails
- Maintain workflow state across errors

### Agent Coordination

- RW Agent maintains overall workflow control
- Validation Agent provides validation services
- Documentation Agent handles documentation updates
- Git Operations skills manage version control
