# Screenshot policy

Industry best practices for screenshots have evolved over time. When user manuals were written to reflect both mainframe and, later, distributed systems products, users were primarily new to computers and needed step-by-step screenshots to use a product. As the collective knowledge of computers has grown and as users have become more sophisticated and knowledgeable about the applications they use, documentation no longer needs to provide users with a shot of every screen or dialog box. As our users have become more sophisticated, so have our user interfaces, such that information previously gleaned from screenshots are now intuited from the user interface itself.

Screenshots also come with a cost that needs to be weighed against the value:

- Environments need to be available and configured with the appropriate data. The type of data QA needs to test and what documentation needs for screenshots (sanitized, no proprietary information, and so on) are not the same. Maintaining usable data for the screenshots is an effort requiring resources outside of the documentation team.   

- Release-specific screenshots are a significant maintenance burden that doesn't scale.

- If our documentation is translated, we need to contain the costs of translating and updating graphics by including only critical screenshots.

## Screenshot guidelines

The documentation team promotes the intentional use of screenshots based on customer needs. We include only screenshots that add value. The documentation team uses the following specific criteria to determine where a screenshot adds value:

- We provide screenshots for complex dialog boxes; in some cases, we also provide callout text that is then explained in detail in accompanying procedures. Examples include dialog boxes that contain multiple subsets of information, with freeform text fields and many options available for selection.

- We provide screenshots that help to orient users in a complicated procedure or to validate that what they see on the screen is correct. Screenshots are helpful when text alone cannot adequately or economically orient the users.

- We might also provide screenshots to illustrate new features or concepts. This approach is helpful for users who are reading the documentation but not currently accessing the product. However, it is still important to choose screenshots carefully based on the needs of a moderately experienced user. We include screenshots only for features or concepts that are unique to our products, and not for familiar features or concepts that users might experience in other products or technologies (showing drop-down lists, file pickers, and so on).

- We will accommodate internal and external customer requests for screenshots that improve the understanding of a procedure.

- We do not provide screenshots for welcome, progress bar, print, confirmation (such as “Are you sure you want to delete this policy?”), message, and about screens. The information conveyed by such screens can be easily communicated in text. We do not provide screenshots for simple dialog box representations. Examples include dialog boxes and wizard pages that feature drop-down lists and option buttons with few or no freeform text fields. These intuitive, simple dialog boxes are easy to explain in text, and screenshots do not add context or value for the customer.