# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

project_list = [
  ["ShopBro2.0", 'shopbrovid.mp4', [
          { para: "ShopBro2.0 was my final group project at bootcamp. The application helps people keep under budget when they are shopping. It also keeps track of past shopping spends." },
          { para: "Front end technologies used include React.js, Redux.js, and bulma. For the backend we used node.js, express.js, postgres, and knex.js. The team also started to implement the project as a mobile app using React Native." }
        ], false],
  ["Square of Pointlessness", 'square.mp4', [
          { para: "Square of Pointlessness was my final exercise for bootcamp prep. I used native Javascript to animate a square." }
        ], true],
  ["CompareBear Australia", 'Comparebear.png',[
          { para: "I was contracted by a small start-up, called Glimp, to work on the launch of their Australian utility comparison website, called CompareBear. This site allows users to compare the price and services of different utility companies." },
          { para: "I was responsible for designing, building and testing the back-end of this application. My work included database set-up, importing data using rake tasks, data validation design and setting up internal APIs. In particular, I designed and developed business logic to calculate comparative annual costs for different electricity retailers, taking into account the considerable range of tariff types and energy consumption patterns across Australia. I also set up front-end skeleton forms and assocciated API calls to assist the front-end developer." },
          { para: "Technologies that I used for this project included: Ruby on Rails, PostgreSQL, Minitest, Jquery, git and Heroku." }
        ], false],
  ["Shopify Customised Theme", 'order-form.mp4', [
          { para: "This is a small side project to customise a theme for the Shopify app. Customisations include custom inputs and an order form." },
          { para: "The merchant can add up to four custom inputs to selected products. A custom input could be a checkbox, radio buttons, drop down or colour selector." },
          { para: "The merchant is also able to add an order form page. Customers can choose which products to purchase, selecting any options and entering the quantity required. The order form caters for products with multiple variants and includes a collection selector and running total." },
          { para: "Technologies used for this project included: Javascript, jQuery, HTML, CSS, SASS and Liquid"}
        ], false],
]

project_list.each do |title, image, copy, old_project|
  Project.create( title: title, image: image, copy: copy, old_project: old_project)
end