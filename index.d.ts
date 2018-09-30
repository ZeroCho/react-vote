import * as React from 'react';

declare function ReactVote(props: IProps): JSX.Element;

export interface ReactVoteTexts {
  addButtonText?: string;
  titleInputPlaceholder?: string;
  addInputPlaceholder?: string;
  removeButtonText?: string;
  closeButtonText?: string;
  resetButtonText?: string;
  createButtonText?: string;
  resultButtonText?: string;
  goBackButtonText?: string;
  voteButtonText?: string;
  downvoteCheckbox?: string;
  downvoteButtonText?: string;
  votedText?: string;
  totalText?: string;
  multipleCheckbox?: string;
  expansionCheckbox?: string;
  showTotalCheckbox?: string;
  expansionPlaceholder?: string;
  expansionButtonText?: string;
  autoCloseText?: string;
  autoClosePlaceholder?: string;
  settingButtonText?: string;
  editButtonText?: string;
  closeCheckbox?: string;
  reasonCheckbox?: string;
  reasonInputPlaceholder?: string;
}

export interface ReactVoteErrors {
  notEnoughItems?: string;
  noTitle?: string;
}

export interface ReactVoteItem {
  title?: string;
  count?: number;
  total?: number;
  voters?: string[] | number[];
  upvoters?: string[] | number[];
  downvoters?: string[] | number[];
  voted?: boolean;
  reason?: boolean;
  reasons?: string[];
}

export interface ReactVoteDiff {
  index?: number;
  item?: ReactVoteItem;
  voter?: string | number;
}

export interface ReactVoteData {
  title?: string;
  items?: any[];
  voters?: string[] | number[];
  closed?: boolean;
  multiple?: boolean;
  expansion?: boolean;
  showTotal?: boolean;
  downvote?: boolean;
  autoClose?: number;
  creator?: string | number;
}

export interface ReactVoteStyles {
  voteWrapper?: string;
  voteTitle?: string;
  titleInput?: string;
  addWrapper?: string;
  addInput?: string;
  addButton?: string;
  itemTitle?: string;
  itemCount?: string;
  itemWrapper?: string;
  buttonWrapper?: string;
  removeButton?: string;
  createButton?: string;
  resultButton?: string;
  goBackButton?: string;
  voteButtons?: string;
  voteButton?: string;
  downvoteButton?: string;
  closeButton?: string;
  resetButton?: string;
  errorMessage?: string;
  votedText?: string;
  expansionButton?: string;
  expansionInput?: string;
  settingButton?: string;
}

interface IProps {
  onCreate: (data: ReactVoteData) => void;
  onUpvote?: (data: ReactVoteData, diff: ReactVoteDiff) => void;
  onExpand?: (data: ReactVoteData, item: any) => void;
  onReset?: (data: ReactVoteData) => void;
  onEdit?: (data: ReactVoteData) => void;
  onDownvote?: (data: ReactVoteData, diff: ReactVoteDiff) => void;
  onClose?: (data: ReactVoteData) => void;
  data?: ReactVoteData;
  styles: ReactVoteStyles;
  text?: ReactVoteTexts;
  errorMessage?: ReactVoteErrors;
  clientId?: string | number;
  isAdmin?: boolean;
  multiple?: boolean;
  downvote?: boolean;
  expansion?: boolean;
  autoClose?: number;
}

export default ReactVote;