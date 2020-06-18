class Api::V1::ProjectsController < ApplicationController
  def index
    all_projects = Project.all
    render json: all_projects
  end
end