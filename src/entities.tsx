export interface IAction {
  type: string;
  transaction: {
    id: string;
    datetime?: string;
    amount?: string;
    type?: string;
    mode?: string;
    commentaire?: string | null;
  };
}

export interface ITransactions {
  id: string;
  datetime?: string;
  amount?: string;
  type?: string;
  mode?: string;
  commentaire?: string | null;
}
