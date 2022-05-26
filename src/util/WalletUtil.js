import { getNetworkFromChainId } from "./NetworkUtil";

export const updateAccountDetails = async (
  web3Api,
  context,
  address,
  chainId
) => {
  const options = { chain: chainId, address: address };
  const avaxBalance = await web3Api.account.getNativeBalance(options);

  const network = getNetworkFromChainId(chainId);

  const decimalValue =
    avaxBalance.balance / Math.pow(10, network.nativeCurrency.decimals);
  avaxBalance.decimalValue = decimalValue;

  const tokenBalances = await web3Api.account.getTokenBalances(options);
  context.setAccountDetails({
    address: address,
    avaxBalance: {
      balance: avaxBalance,
      decimalValue: decimalValue,
    },
    tokenBalances: tokenBalances,
  });
};

export const getTokenBalance = (context, tokenAddress) => {
  const accountDetails = context.main.accountDetails;
  if (accountDetails.tokenBalances) {
    for (const token of accountDetails.tokenBalances) {
      if (token.token_address == tokenAddress) {
        return token.balance / Math.pow(10, token.decimals);
      }
    }
  }
  return 0;
};
