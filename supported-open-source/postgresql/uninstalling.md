---
title: Uninstalling PostgreSQL
product: PostgreSQL
url: https://www.enterprisedb.com/docs/supported-open-source/postgresql/uninstalling/
lastModified: 2025-01-16T11:57:58+05:30
---

# Uninstalling PostgreSQL

The PostgreSQL installer creates an uninstaller in the PostgreSQL installation directory. You can uninstall PostgreSQL on Windows and Mac hosts.

> **Note**
>
> If you used Stack Builder to install any applications that work with PostgreSQL, you must uninstall each application. Use the uninstall program created for that application during the install process.

## Uninstalling PostgreSQL on Windows

1. On the Windows Control Panel, open the Uninstall or Change a Program dialog box.

   ![The Uninstall or Change a Program dialog box](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/advocacy_docs/supported-open-source/postgresql/installing/images/change_program.png)

2. Right-click **PostgreSQL**, and select **Uninstall/Change** from the context menu.

   ![Confirm that you want to uninstall PostgreSQL](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/advocacy_docs/supported-open-source/postgresql/installing/images/uninstalling_postgreSQL_comfirmation.png)

3. You can remove the entire application or individual components.

   - To remove the entire application, select **Entire application** and select **Next**.
   - To remove individual components, select **Individual components** and select **Next**. Then, from the list, select the components to uninstall, and select **Next**.

     ![Select the components to uninstall](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/advocacy_docs/supported-open-source/postgresql/installing/images/select_the_components_to_uninstall.png)

   A progress bar keeps you informed as PostgreSQL is removed.

   ![Uninstalling PostgreSQL](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/advocacy_docs/supported-open-source/postgresql/installing/images/uninstalling_postgreSQL.png)

4. When the uninstaller completes, select **OK**.

   ![An Info dialog box confirms the uninstallation](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/advocacy_docs/supported-open-source/postgresql/installing/images/uninstallationcomplete.png)

## Uninstalling PostgreSQL on Mac

These instructions apply if you used EDB's interactive Mac installer to install PostgreSQL.

- If you used another installer, refer to the [macOS documentation](https://support.apple.com/guide/mac-help/install-and-uninstall-other-apps-mh35835/mac) for instructions on uninstalling an app.

- If you used [Homebrew](https://brew.sh/), use the `brew uninstall` command to uninstall PostgreSQL and any related packages. Use `brew list` to see what's installed.

To uninstall PostgreSQL on a Mac system:

> **Note: Data is not deleted**
>
> This uninstaller removes the application but, to avoid data loss,
> leaves in place the Postgres data directory and the postgres user that was
> created to manage the installation. At the end of its run, the uninstaller
> displays a message confirming that it didn't remove the data directory or user.

1. Invoke the uninstaller:

   ```
   open  /Library/PostgreSQL/<version>/uninstall-postgresql.app/Contents/MacOS/installbuilder.sh
   ```

   Where `<version>` is the version of PostgreSQL you installed.

2. You're prompted for a password. If your user has admin rights on macOS, enter your password. Otherwise, enter the user name and password of a user with admin rights.

   The uninstaller opens and asks if you want to uninstall the entire application or individual components.

   ![Remove the entire application or components](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/advocacy_docs/supported-open-source/postgresql/installing/images/remove_the_entire_application_or_components.png)

3. Respond to the installer:

   - To remove the entire application, select **Entire application**, and select **Next**.
   - To remove individual components, select **Individual components**. Select the components to uninstall, and select **Next** to start uninstalling components.

   ![Selecting the components to uninstall](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/advocacy_docs/supported-open-source/postgresql/installing/images/selecting_the_components_to_uninstall.png)

   Progress bars appear as each component is removed.

4. When the uninstaller completes, select **OK**.

   ![The Uninstallation is completed](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/advocacy_docs/supported-open-source/postgresql/installing/images/mac_uninstallation_completed.png)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
