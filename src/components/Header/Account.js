import React, { Component } from "react";
import AvaxChainConfirmation from "../Account/AvaxChainConfirmation";
import { AccountBadge } from "../Account/AccountBadge";

export default class Account extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="font-custom">
        <div className="font-custom max-w-6xl mx-auto pl-4">
          <a href="#" className="flex items-center py-4 pl-2">
            <AvaxChainConfirmation />
            <AccountBadge />
          </a>
        </div>
      </nav>
    );
  }
}
