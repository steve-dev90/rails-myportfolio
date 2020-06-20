require 'json'

class Api::V1::ProjectsController < ApplicationController
  def index
    all_projects = Project.all.map do |project|
      { id: project.id, title: project.title, image: project.image,
      copy: JSON.parse(project.copy), old_project: project.old_project}
    end
    render json: all_projects
  end
end