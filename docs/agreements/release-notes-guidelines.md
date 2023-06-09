# Guidelines for wording release notes

## General guidelines

- For features and enhancements, use second person (you) instead of third person (the user).
- For bug fixes, avoid referring to the user. Instead, describe the software behavior. If the description is clearer by referring to the user, use third person.
- Follow basic terminology guidelines: 
  - Don’t use “should” or “would.” Don’t use “will” unless referring to a future release. 
  - Don’t use “may.” Use “might” or “can” instead.
  - Use contractions.
  - Use serial (aka Oxford) commas.

## Phrasing guidelines for enhancements

You can use either of the forms described in the following sections for enhancements. Add as much detail as needed to convey the relevance of the enhancement. If you need to describe how the product worked before, use “previously,” not “currently.”

### Past tense description of the development work

Start with a past-tense word that describes what you did. Then provide any relevant detail. 

Examples:

- Added support for WHERE clause to the UPDATE and INSERT of the MERGE command for Oracle compatibility.
- Added the ability to copy probes and alerts to all servers in a group without having to select them individually.
- Enabled multi-insert support for the dynamic partition for EDB*Loader and COPY command.

### “Now” phrase

Describe what the product does now as a result of the enhancement, generally in the form: The *product/feature* now *does the new behavior*.

Examples:
- EDB Postgres Advanced Server now provides INDEX and NO_INDEX hints for the partitioned table. The optimizer hints apply to the inherited index in the partitioned table. The execution plan internally expands to include the corresponding inherited child indexes and applies them in later processing.
- The INTO clause now accepts multiple composite row type targets in SPL. This enhancement allows you to assign a SELECT list having a mix of scalar and composite type values that are fetched from a table to corresponding scalar or composite variables (including collection variables) in the SPL code.

### Enhancement don’ts 

Don’t start the enhancement with a gerund, which suggests the work is still in progress:
- **Correct**: Added the XYZ function.
- **Incorrect**: Adding the XYZ function.

Don’t use a title or short description:
- **Correct**: Added support for WHERE clause to the UPDATE and INSERT of the MERGE command for Oracle compatibility.
- **Incorrect**: MERGE syntax. - Adding support for WHERE clause to the UPDATE and INSERT of the MERGE command for Oracle compatibility.
- **Correct**: You can now configure the durability options, such as Group Commit, CAMO, Eager Replication, and Lag Control, through Commit Scope.
- **Incorrect**: Unified replication durability configuration - The durability options such as Group Commit, CAMO, Eager Replication, or Lag Control are now all configured through Commit Scope configuration.

## Bug fix writing guidelines

Start bug fix descriptions with:
- Fixed an issue whereby…
- Fixed a (such-and-such) issue in which/whereby…

It’s okay to use “the user” in bug fixes. Using second person is generally not accurate. 

- **Don’t include** internal Jira ticket numbers. 
- **Do include** customer facing support tickets, using this format after the last sentence of the description: *Support ticket: ticketNumber*

