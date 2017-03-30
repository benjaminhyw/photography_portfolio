# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create({
  name: "Ben Flores",
  email: "ben@gmail.com",
  password: "123456",
  instagram: "https://www.instagram.com/benjaminhyw/",
  facebook: "https://www.facebook.com/benjaminhyw/",
  twitter: "https://www.twitter.com/benjaminhyw/"
})

Photo.create({
  user_id: 1,
  title: "Nude Shadows",
  url: "https://img0.etsystatic.com/072/1/6135861/il_fullxfull.819553494_9nl2.jpg",
  landscape?: false
})

Photo.create({
  user_id: 1,
  title: "Tagged Ship",
  url: "https://inspirationfeeed.files.wordpress.com/2014/03/20481.jpg",
  landscape?: true
})

Photo.create({
  user_id: 1,
  title: "Tall Wall Ruins",
  url: "http://anseladams.com/wp-content/uploads/2016/07/White-House-Ruin-847x1260-1.jpg"
})

Photo.create({
  user_id: 1,
  title: "Eyes",
  url: "https://static.pexels.com/photos/120271/pexels-photo-120271.jpeg"
})

Photo.create({
  user_id: 1,
  title: "Tiburon",
  url: "https://s-media-cache-ak0.pinimg.com/originals/5f/cc/77/5fcc77b457de341705a88cfd7331089a.jpg"
})

Photo.create({
  user_id: 1,
  title: "Freckles",
  url: "https://s-media-cache-ak0.pinimg.com/736x/e4/a4/30/e4a430be8020f49366a98d78442bf6e7.jpg"
})

Photo.create({
  user_id: 1,
  title: "Lion",
  url: "https://s-media-cache-ak0.pinimg.com/originals/af/20/08/af2008e0d300f6fd3ca5b2617a06dff6.jpg"
})

Photo.create({
  user_id: 1,
  title: "Tiger",
  url: "http://www.stockvault.net/blog/wp-content/uploads/2012/11/wild-27.jpg"
})