import React, { Component } from 'react'

export default class BillingForm extends Component {
    render() {
        return (
            <div>
              <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="inputFirstName">First Name</label>
                    <input type="text" className="form-control" id="inputFirstName" />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="inputLastName">Last Name</label>
                    <input type="text" className="form-control" id="inputLastName" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                        Remember me
                    </label>
                    </div>
                </div>
              </form>
            </div>
        )
    }
}
