require 'test_helper'

class RegistrationsControllerTest < ActionController::TestCase
  setup do
    @registration = registrations(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:registrations)
  end

  test "should create registration" do
    assert_difference('Registration.count') do
      post :create, registration: { company_name: @registration.company_name, email: @registration.email, first_name: @registration.first_name, last_name: @registration.last_name }
    end

    assert_response 201
  end

  test "should show registration" do
    get :show, id: @registration
    assert_response :success
  end

  test "should update registration" do
    put :update, id: @registration, registration: { company_name: @registration.company_name, email: @registration.email, first_name: @registration.first_name, last_name: @registration.last_name }
    assert_response 204
  end

  test "should destroy registration" do
    assert_difference('Registration.count', -1) do
      delete :destroy, id: @registration
    end

    assert_response 204
  end
end
