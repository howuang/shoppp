# Shopp - E-commerce Website

## Description:
This exercise is a E-commerce Website fetching data from a provided Back End API using React JS and Redux in Full Stack Web Development Bootcamp at Coderschool.

## Requirements:

- [x] User are welcome with landing page
- [x] User can see a list of products
- [x] User can pagination through page
- [ ] User can filter the products list
- [ ] User can search for keywords
- [x] User can click to see detail of one single product
- [ ]User can share search result and single product detail page URL to another user
- [x] User can use url to go to different page
- [x] User can create account
- [x] User can login/logout
- [ ] User need authorization for some protected feature and layout
- [ ] Authorize User can create product cart
- [x] User can add product to cart
- [ ] User can see product cart detail
- [ ] User can request to pay for a cart
- [x] User can create review for a product
- [ ] User can see review of a product
- [ ] User can rate a product
- [ ] **Must** create at least 5 orders and 5 reviews

## File Structure

` |- friday/

    |- src/
        |- redux/
            |- actions/
                |- auth.action.js
                |- user.action.js
            |- constants/
                |- auth.constant.js
                |- user.constant.js
            |- reducers/
                |- auth.reducer.js
                |- user.reducer.js`
            |- store.js
        |- pages/
            |- LoginPage/
                |- LoginPage.js
                |- LoginPage.css
            |- ProfilePage/
                |- ProfilePage.js
                |- ProfilePage.css
            |- RegisterPage/
                |- RegisterPage.js
                |- RegisterPage.css
            |- HomePage/
                |- HomePage.js
                |- HomePage.css
            |- ProductDetailPage/
                |- ProductDetailPage.js
                |- ProductDetailPage.css
            |- SearchPage/
                |- SearchPage.js
                |- SearchPage.css
            |- NotFoundPage/
                |- NotFoundPage.js
                |- NotFoundPage.css
        |- components/
            |- PublicsNavbar/
                |- PublicNavbar.js
                |- PublicsNavbar.css
            |- ProductPagination/
                |- ProductPagination.js
                |- ProductPagination.css
            |- ProductCarousel/
                |- ProductCarousel.js
                |- ProductCarousel.css
            |- ProductList/
                |- ProductList.js
                |- ProductList.css
