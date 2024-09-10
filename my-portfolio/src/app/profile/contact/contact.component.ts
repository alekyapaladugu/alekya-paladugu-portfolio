import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  model: any = {};

  constructor() {}

  sendEmail() {
    emailjs
      .send(
        'service_sq2lh14',
        'template_h83pmyj',
        {
          from_name: this.model.name,
          subject: this.model.subject,
          from_email: this.model.email,
          message: this.model.message,
        },
        'rJgc1FnNSvo8yit60'
      )
      .then((response: EmailJSResponseStatus) => {
        console.log('Email successfully sent!', response.status, response.text);
        alert('Your message has been sent!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again.');
      });
  }

  ngOnInit(): void {}
}
