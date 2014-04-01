class Registration < ActiveRecord::Base
	attr_accessible :first_name,:last_name,:email,:company_name
	validates :first_name,:last_name,:company_name,presence:true
	validates :email, uniqueness: true ,:presence =>{:message => "Valid E-mail is required"}
end
