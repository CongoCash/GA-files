class UsersController < ApplicationController
  before_action :require_login, except: [:index, :new, :create]
  before_action :check_owner, except: [:index, :new, :create, :show]

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    login(@user)
    redirect_to @user
  end

  def show
    @user = User.find(params[:id])
    render :show
  end



  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

  def check_owner
    if current_user[:id].to_s != params[:user_id].to_s
      redirect_to user_library_path(current_user)
    end
  end
end
