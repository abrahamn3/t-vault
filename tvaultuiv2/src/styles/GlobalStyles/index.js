import styled from 'styled-components';
import mediaBreakpoints from '../../breakpoints';

export const SubHeading = styled('div')`
  font-size: 2.4rem;
  color: ${(props) => props.color || '#fff'};
  line-height: ${(props) => props.lineHeight || 'normal'};
  font-family: ${(props) => props.fontfamily || ''};
  ${(props) => (props.extraCss ? props.extraCss : '')}
`;

export const TitleOne = styled('div')`
  font-size: 1.8rem;
  color: ${(props) => props.color || '#fff'};
  line-height: ${(props) => props.lineHeight || 'normal'};
  font-family: ${(props) => props.fontfamily || ''};
  ${(props) => (props.extraCss ? props.extraCss : '')}
  ${mediaBreakpoints.small} {
    font-size: 1.6rem;
  }
`;
export const TitleTwo = styled('div')`
  font-size: 1.6rem;
  color: ${(props) => props.color || '#fff'};
  line-height: ${(props) => props.lineHeight || 'normal'};
  font-family: ${(props) => props.fontfamily || ''};
  ${(props) => (props.extraCss ? props.extraCss : '')}
`;
export const TitleThree = styled('div')`
  font-size: 1.4rem;
  color: ${(props) => props.color || '#fff'};
  line-height: ${(props) => props.lineHeight || 'normal'};
  font-family: ${(props) => props.fontfamily || ''};
  text-overflow: ellipsis;
  overflow: hidden;
  ${(props) => (props.extraCss ? props.extraCss : '')}
`;
export const TitleFour = styled('div')`
  font-size: 1.3rem;
  color: ${(props) => props.color || '#fff'};
  line-height: ${(props) => props.lineHeight || 'normal'};
  font-family: ${(props) => props.fontfamily || ''};
  ${(props) => (props.extraCss ? props.extraCss : '')}
`;

export const BackgroundColor = {
  listBg: '#1c1f29',
  secretBg: '#2a2e3e',
  secretHoverBg: '#252937',
};

export const PopperItem = styled.div`
  padding: 0.5em;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  cursor: pointer;
  span {
    margin-right: 0.75rem;
  }
  img {
    width: 2rem;
    height: 2rem;
  }
  :hover {
    background-image: ${(props) => props.theme.gradients.list || 'none'};
  }
  ${(props) => (props.extraCss ? props.extraCss : '')}
`;
