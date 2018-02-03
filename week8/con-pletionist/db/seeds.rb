# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Talk.destroy_all
Conference.destroy_all

Talk.create([{
  title: "Welcome",
  speaker_name: "David",
  start_time: 1.days.from_now.at_noon,
  end_time: 2.days.from_now.at_noon
  },
  {
    title: "Welcome",
    speaker_name: "David",
    start_time: 2.days.from_now.at_noon,
    end_time: 3.days.from_now.at_noon
  }])

Conference.create([{
                     name: "Welcome",
                     location: "David",
                   },
                   {
                     name: "Welcome",
                     location: "Daniel",
                   },
                   {
                     name: "Welcome",
                     location: "Megan",
                   },
                   {
                     name: "Welcome",
                     location: "Rachel",
                   },])