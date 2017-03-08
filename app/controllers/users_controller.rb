class UsersController < ApplicationController
  def new
    @user = User.new
  end

  private
    def find_user
      @user = User.find_by_id(params[:id])
    end

    def user_params
      params.require(:user).permit(:name, :email, :password)
    end
end
