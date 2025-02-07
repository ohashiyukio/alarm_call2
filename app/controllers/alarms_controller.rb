class AlarmsController < ApplicationController
  def index
    @alarms = Alarm.order(:alarm_time)
  end

  def new
    @alarm = Alarm.new
  end

  def create
    @alarm = Alarm.new(alarm_params)
    if @alarm.save
      redirect_to alarms_path, notice: "アラームを設定しました"
    else
      render :new
    end
  end

  def show
    @alarm = Alarm.find(params[:id])
  end

  private

  def alarm_params
    params.require(:alarm).permit(:alarm_time, :comment)
  end
end
