class ContactMailer < ApplicationMailer
  def send_contact_email(message_detail)
    @message_detail = message_detail
    mail( :to => 'stevetorrens70@gmail.com',
      :subject => "Message from steve.torrens.co.nz #{Time.now.to_s}" )
  end
end
