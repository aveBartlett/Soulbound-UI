import React, { Component } from "react";
import AvaxChainConfirmation from "../Account/AvaxChainConfirmation";
import { AccountBadge } from "../Account/AccountBadge";

export default class WalletAccount extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <AvaxChainConfirmation />
        <AccountBadge />
      </div>
    );
  }
}
