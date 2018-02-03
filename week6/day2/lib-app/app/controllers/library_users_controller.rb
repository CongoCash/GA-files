class LibraryUsersController < ApplicationController
  before_action :require_login, except: [:index]
  before_action :check_owner

  def index
    @user = User.find(params[:user_id])
    @libraries = @user.libraries
  end

  def create
    @library = Library.find(params[:library_id])
    @library.users.push(current_user)

    redirect_to current_user
  end

  private

  def check_owner
    if current_user[:id].to_s != params[:user_id].to_s
      redirect_to user_library_path(current_user)
    end
  end

end
