class Animal < ApplicationRecord
    has_one :listing

    # # Bulk upload animals from a CSV file
    # def self.import(file)
    #     CSV.foreach(file.path, headers: true) do |row|
    #         company_hash = Animal.new
    #         company_hash.name = row[0]
    #         company_hash.species = row[1]
    #         company_hash.breed = row[2]
    #         company_hash.image = row[3]
    #         company_hash.gender = row[4]
    #         company_hash.age = row[5]
    #         company_hash.status = row[6]
    #         company_hash.description = row[7]
    #         company_hash.save
    #     end
    # end


end
