import React, { Component } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegCheckCircle } from "react-icons/fa";
// import DatePicker from "react-date-picker";
import "moment/locale/es.js";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { func } from "prop-types";

class Body extends React.Component {
  state = {
    total: 0
  };

  myFunction = () => {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    cell1.innerHTML = document.getElementById("date").value;
    cell2.innerHTML = document.getElementById("acct-no").value;
    cell3.innerHTML = document.getElementById("merchant").value;
    cell4.innerHTML = document.getElementById("category").value;
    cell5.innerHTML = "$" + document.getElementById("amount").value;
    cell6.innerHTML = document.getElementById("reimb").value;
    cell7.innerHTML = document.getElementById("bizpurp").value;
    cell8.innerHTML = document.getElementById("description").value;

    this.state.total.toFixed(2);

    var amount_1 = document.getElementById("amount").value;
    var amount_2 = parseFloat(amount_1);

    this.state.total += amount_2;
    document.getElementById("total").innerHTML =
      "Total Expenses: $" + this.state.total;
    document.getElementById("total2").innerHTML =
      "Less Cash Advance: $" + this.state.total;

    // var checkboxData = [
    //   { checked : false, value: 'No' },
    //   { checked: true, value: 'Yes' },
    // ];

    // var checkedData = props => (
    //   <div>
    //     <input type="checkbox" checked={props.checked} onChange={props.onCheckChange} />
    //     {props.value}
    //   </div>
    // )
    // var Hello = React.createClass ({
    //   getInitialState() {
    //     return {
    //       items: this.props.checkboxDatas.concat(),
    //     };
    //   },
    //   onCheckChange(idx) {
    //     ret
    //   }
    // })
    // function myFunction2() {
    //   var dueBack = 0;
    //   this.state.dueBack.toFixed(2);

    //   var checkbox = document.getElementById("reimb");
    //   if (checkbox.checked != 0) {
    //     var amount_3 = document.getElementById("amount").value;
    //     var amount_4 = parseFloat(amount_3);

    //     this.state.dueBack += amount_4;
    //     document.getElementById("total3").innerHTML =
    //       "Total Due to Employee: $" + this.state.dueBack;
    //   }
    // }
    // myFunction2();

    document.getElementById("date").value = "";
    document.getElementById("acct-no").value = "1 - SBD";
    document.getElementById("merchant").value = "";
    document.getElementById("category").value = "MISC";
    document.getElementById("amount").value = "";
    document.getElementById("reimb").value = "";
    document.getElementById("bizpurp").value = "";
    document.getElementById("description").value = "";
  };

  render() {
    return (
      <div className="globalBody">
        <div className="expHeader">
          <div className="exp-h1">Laura Hillman Expense Resport</div>
          <div className="create-new">
            <div>
              <a href="">Friday, March 20, 2020</a>
            </div>
          </div>
        </div>
        <div className="container exp-form bottom">
          <div className="date col-auto mr-auto">
            <p className="gen">Date</p>
            <input
              type="date"
              id="date"
              locale="us"
              aria-label="Date"
              placeholder="Date"
            />
          </div>
          <div className="accountNo col-auto mr-auto">
            <p className="gen">Account No.</p>
            <select
              className="add__type"
              id="acct-no"
              aria-label="Account Number"
            >
              <option value="SBD">SBD</option>
              <option value="Disney">Disney</option>
              <option value="NBC Universal">NBC Universal</option>
              <option value="RA Colgate">RA Colgate</option>
              <option value="ShopRite">ShopRite</option>
              <option value="Walmart">Walmart</option>
              <option value="Bimbo">Bimbo</option>
              <option value="Dr Pepper">Dr Pepper</option>
              <option value="Pepsi Co">Pepsi Co</option>
              <option value="EA Sports">EA Sports</option>
              <option value="Kelloggs">Kelloggs</option>
              <option value="LEGO">LEGO</option>
              <option value="MARS">MARS</option>
              <option value="SONY">SONY</option>
              <option value="Red Bull">Red Bull</option>
              <option value="RSM General" defaultValue>
                RSM General
              </option>
            </select>
          </div>
          <div className="merchant col-auto mr-auto">
            <p className="gen">Merchant</p>
            <input
              type="text"
              id="merchant"
              placeholder="Amazon"
              aria-label="Merchant"
            />
          </div>
          <div className="category col-auto mr-auto">
            <p className="gen">Category</p>
            <select className="add__type" id="category" aria-label="Category">
              <option value="MISC" defaultValue>
                MISC
              </option>
              <option value="AirFare">AirFare</option>
              <option value="Car Rental">Car Rental</option>
              <option value="Mileage, Gas, Parking, Repairs">
                Mileage, Gas, Parking, Repairs
              </option>
              <option value="Taxi, Carfare, Tolls">Taxi, Carfare, Tolls</option>
              <option value="Lodging">Lodging</option>
              <option value="Meals (Breakfast)">Meals (Breakfast)</option>
              <option value="Meals (Lunch)">Meals (Lunch)</option>
              <option value="Meals (Dinner)">Meals (Dinner)</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>
          <div className="amount col-1 mr-auto">
            <p className="gen">Amount</p>
            <input
              type="number"
              id="amount"
              placeholder="$0.00"
              aria-label="Amount"
            />
          </div>
          <div className="reimburs col-1 mr-auto">
            <p className="gen">Reimbursable</p>
            <input
              type="checkbox"
              id="reimb"
              aria-label="Reimbursable"
              value="No"
            />
          </div>
          <div className="bizPurp col-2 mr-auto">
            <p className="gen">Business Purpose</p>
            <input
              type="text"
              id="bizpurp"
              placeholder="Business Trip"
              aria-label="Business Purpose"
            />
          </div>
          <div className="description col-sm-1 mr-auto">
            <p className="gen">Description</p>
            <textarea
              name="description"
              className="add__description"
              id="description"
              placeholder="Add Description"
              type="text"
              aria-label="Description"
              rows="1"
            ></textarea>
          </div>
          <div className="btn col-auto mr-auto">
            <p className="gen"></p>
            <button
              type="button"
              className="add__btn"
              aria-label="Add Expense"
              onClick={this.myFunction}
            >
              <FaRegCheckCircle />
            </button>
          </div>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Account No.</th>
              <th>Merchant</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Reimbursable</th>
              <th>Business Purpose</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody id="myTable">
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="total-hd">
          <h3 className="exp-sum">Expense Summary</h3>
          <div className="totals">
            <h5 id="total">Total Expenses:</h5>
            <h5 className="lessCash" id="total2">
              Less Cash Advance:
            </h5>
            <h5 className="dueEmp" id="total3">
              Total Due to Employee: $
              <input
                className="dueToEmp"
                type="number"
                id="dueToEmp"
                placeholder="Amount"
              />
            </h5>
          </div>
        </div>
        <div className="submit-btn">
          <button className="sbt-btn">Submit Report</button>
        </div>
      </div>
    );
  }
}
export default Body;
