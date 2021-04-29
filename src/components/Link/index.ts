import styled from 'styled-components/macro';
import Link from 'next/link'

const CustomLink = styled(Link)`
  color: ${p => p.theme.primary};
  display: flex;
  alignItems: center;
  justifyContent: center;
  cursor: pointer;
  text-decoration: none;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }`;

export default CustomLink;

