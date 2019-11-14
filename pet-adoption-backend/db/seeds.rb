# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all 
# Animal.destroy_all
# Listing.destroy_all 

# u1 = User.create(user_name: "Sam123", first_name: "Sam", last_name: "Stone", email: "Sam123@gmail.com", 
#     address: "12345 Openland street, 77000 Houston,Tx", phone_num: 1234560987)

# u2 = User.create(user_name: "Jack123", first_name: "Jack", last_name: "Little", email: "Jack123@gmail.com", 
#     address: "7342 Closeland street, 77036 Houston,Tx", phone_num: 3232560987)

# u3 = User.create(user_name: "Kim123", first_name: "Kim", last_name: "Smith", email: "Kim123@gmail.com", 
#     address: "963 Middleland street, 77012 Houston,Tx", phone_num: 1238353987)


# a1 = Animal.create(name: "Puffy",species: "Dog", breed: "Pitbull", image: "https://i0.wp.com/metro.co.uk/wp-content/uploads/2018/03/red-nose-pitbull-1-e1520600821708.jpg?quality=90&strip=all&zoom=1&resize=644%2C548&ssl=1",
#  gender: "Female",age: 10, status: "Adopted", description: "Good personality.")

# a2 = Animal.create(name: "Sky",species: "Dog", breed: "German Sheperd", image: "https://www.rover.com/blog/wp-content/uploads/2011/11/german-shepherd-1200x675.jpg",
#  gender: "Male",age: 1, status: "Adopted", description: "Great personality.")

# a3 = Animal.create(name: "Dart",species: "Cat", breed: "Tabi", image: "https://www.catster.com/wp-content/uploads/2017/11/Mackerel-Tabby-cat.jpg",
#  gender: "Female",age: 5, status: "Fostering", description: "Bad personality.")

# a4 = Animal.create(name: "Clip",species: "Cat", breed: "British shorthair", image: "https://www.catbreedslist.com/uploads/allimg/cat-pictures/British-Shorthair-2.jpg",
#  gender: "Male",age: 2, status: "Adopted", description: "Alright personality.")
 
# a5 = Animal.create(name: "Karl",species: "Cat", breed: "British shorthair", image: "https://www.catbreedslist.com/uploads/allimg/cat-pictures/British-Shorthair-2.jpg",
#  gender: "Male",age: 20, status: "Availible", description: "Old cat.")

# l1 = Listing.create(user_id: u1.id, animal_id: a1.id)
# l2 = Listing.create(user_id: u1.id, animal_id: a2.id)
# l3 = Listing.create(user_id: u2.id, animal_id: a3.id)
# l4 = Listing.create(user_id: u3.id, animal_id: a4.id)


# require 'csv'

# csv_text = File.read(Rails.root.join('lib', 'seeds', 'dogs_Db_csv.csv'))
# csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
# csv.each do |row|
#   t = Animal.new
#   t.name = row['name']
#   t.species = row['species']
#   t.breed = row['breed']
#   t.image = row['image']
#   t.gender = row['gender']
#   t.age = row['age']
#   t.status = row['status']
#   t.description = row['description']
# end


