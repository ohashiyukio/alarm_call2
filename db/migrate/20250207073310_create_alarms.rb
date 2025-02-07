class CreateAlarms < ActiveRecord::Migration[7.0]
  def change
    create_table :alarms do |t|
      t.datetime :alarm_time, null: false
      t.string :comment, null: false

      t.timestamps
    end
  end
end
