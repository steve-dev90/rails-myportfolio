class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :image
      t.string :copy
      t.boolean :old_project
      t.timestamps
    end
  end
end
