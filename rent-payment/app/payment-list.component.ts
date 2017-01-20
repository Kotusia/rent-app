import { Component } from '@angular/core';

@Component({
  selector: 'payment-list',
  template: `
  <div class="col-md-10">
    <h2> {{title}}</h2>
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Payment Amount</th>
          <th>Date of Payment</th>
        </tr>
        <tr>
          <td>Stefan</td>
          <td>Kot</td>
          <td>500 PLN</td>
          <td>19.01.2017</td>
        </tr>
        <tr>
          <td>Stefania</td>
          <td>Mysz</td>
          <td>500 PLN</td>
          <td>18.01.2017</td>
        </tr>
      </table>
    </div>
  </div>
`,
})
export class PaymentListComponent  {
  title = 'List of payments';
}
