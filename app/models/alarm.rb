class Alarm < ApplicationRecord
  validates :alarm_time, presence: true
  validates :comment, presence: true
end
