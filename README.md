<h1 align="center">
  Gatsby + Strapi portfolio and blog
</h1>

## Installation

1.  **Create Gatsby site, install dependencies, install the Strapi source plugin**

    Use the Gatsby CLI to create a new site, specifying this as the starter.

    ```sh
    # create a new Gatsby site using this starter
    gatsby new gatsby-strapi-bulma-blog https://github.com/samponeill/gatsby-strapi-bulma.git
    cd gatsby-strapi-bulma-blog/
    npm install --save-dev
    npm install --save gatsby-source-strapi
    ```

1. **Get Strapi**
    Follow instructions here:
    https://strapi.io/documentation/3.x.x/getting-started/quick-start.html#_1-install-strapi-globally

    Install a Strapi cms in your project folder next to the Gatsby blog 
    
    ```sh    
    strapi new cms --quickstart
    ```

1.  **Create user & set up content manager**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd gatsby-strapi-bulma-blog/
    gatsby develop
    ```
    
    Navigate into your new CMS directory and start it up.

    ```sh
    cd cms/
    strapi start
    ```

    Your site is now running at `http://localhost:8000`, and your CMS is running at `http://localhost:1337`

    Create the following content types:
    
    **Article:**
      - Title (String)
      - Standfirst (Text)
      - Content (Text)
      - Image (Media)
      - Author (Relation with User)
      - Draft (Boolean)

    **Tag:**
      - Name (String)
      - Articles (Relation with Articles)

    **Logo:**
      - Alt (String)
      - Logo (media)
      - Strapline (String)

    **Page**
      - Title (String)
      - Content (Text)

    Set permissions for Article, Tag, Logo, Page and User to `Find`