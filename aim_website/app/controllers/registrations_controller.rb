class RegistrationsController < ApplicationController
  # GET /registrations
  # GET /registrations.json
  def index
    @registrations = Registration.all

    render json: @registrations
  end

  # GET /registrations/1
  # GET /registrations/1.json
  def show
    @registration = Registration.find(params[:id])

    render json: @registration
  end

  # POST /registrations
  # POST /registrations.json
  def create
    # p params
     p "$$$$$$"
     p params[:registration] #:first_name => "assdas",:last_name => "dasdas"
    register= {:first_name=>params[:first_name],:last_name=>params[:last_name],:email=>params[:email],:company_name=>params[:company_name]}
     p register
    @registration = Registration.new(register)

  if @registration.save
    
        # Registration.new(params[:registration]).save
         # format.html { redirect_to @registration, notice: 'Successfully Registered.' }
         # format.json { render json: @registration, status: :created, location: @registration }
         render json: @registration, status: :created, location: @registration
    else
      # format.html { redirect_to @registration }
      #    format.json { render json: @registration.errors.full_messages, status: :created, location: @registration }
      # render json: @registration.errors, status: :unprocessable_entity
      render json: @registration.errors.full_messages, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /registrations/1
  # PATCH/PUT /registrations/1.json
  def update
    @registration = Registration.find(params[:id])

    if @registration.update(params[:registration])
      head :no_content
    else
      render json: @registration.errors, status: :unprocessable_entity
    end
  end

  # DELETE /registrations/1
  # DELETE /registrations/1.json
  def destroy
    @registration = Registration.find(params[:id])
    @registration.destroy

    head :no_content
  end
end
