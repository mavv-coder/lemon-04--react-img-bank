import { css } from "emotion";

export const flexContainer = css`
  display: flex;
  justify-content: space-between;
`;

export const title = css`
  margin-right: 30px;
  font-size: 20px;
  font-weight: 400;
`;

export const linkText = css`
  text-decoration: none;
  font-size: 18px;
  padding: 12px;
  margin-right: 10px;
  border-radius: 3px;
  color: #fff;
  & :hover {
    color: #3f51b5;
    background-color: #e6ecff;
  }
`;

export const activeLink = css`
  text-decoration: none;
  font-size: 18px;
  padding: 12px;
  margin-right: 10px;
  border-radius: 3px;
  color: #3f51b5;
  background-color: #e6ecff;
`;

export const icon = css`
  font-size: 30px;
`;
