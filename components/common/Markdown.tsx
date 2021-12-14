/* eslint react/no-children-prop: 0 */
// react
import * as React from 'react';
// next
import Image, { ImageProps } from 'next/image';
// markdown-to-jsx
import MTJMarkdown from 'markdown-to-jsx';
// @mui
import {
  Box,
  BoxProps,
  Divider,
  DividerProps,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableProps,
  TableRow,
  Typography,
  TypographyProps,
  styled,
} from '@mui/material';
// custom component
import TextLink from 'components/common/TextLink';
import Blockquote from 'components/common/Blockquote';
// type
interface MarkdownProps {
  content?: string;
  sx?: React.CSSProperties;
}

const InlineCode = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'inline-block',
  padding: '4px 8px',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  borderRadius: theme.shape.borderRadius,
}));

const Markdown: React.FunctionComponent<MarkdownProps> = (props) => {
  const { content = '**No Content**', sx } = props;

  return (
    <Box sx={sx}>
      <MTJMarkdown
        children={content}
        options={{
          overrides: {
            a: {
              component: TextLink,
            },
            blockquote: {
              component: Blockquote,
            },
            code: {
              component: InlineCode,
            },
            h1: {
              component: Typography,
              props: {
                component: 'h2',
                sx: {
                  marginBottom: '0.75rem',
                  marginTop: '1.5rem',
                },
                variant: 'h2',
              } as TypographyProps,
            },
            h2: {
              component: Typography,
              props: {
                component: 'h2',
                sx: {
                  marginBottom: '0.5rem',
                  marginTop: '1.2rem',
                },
                variant: 'h3',
              } as TypographyProps,
            },
            h3: {
              component: Typography,
              props: {
                component: 'h3',
                sx: {
                  marginBottom: '0.5rem',
                  marginTop: '1.2rem',
                },
                variant: 'h4',
              } as TypographyProps,
            },
            h4: {
              component: Typography,
              props: {
                component: 'h4',
                sx: {
                  marginBottom: '0.5rem',
                  marginTop: '1.2rem',
                },
                variant: 'h5',
              } as TypographyProps,
            },
            h5: {
              component: Typography,
              props: {
                component: 'h5',
                sx: {
                  marginBottom: '0.5rem',
                  marginTop: '1.2rem',
                },
                variant: 'h6',
              } as TypographyProps,
            },
            h6: {
              component: Typography,
              props: {
                component: 'h6',
                sx: {
                  fontSize: '1.1rem',
                  marginBottom: '0.5rem',
                  marginTop: '1.2rem',
                },
                variant: 'h6',
              } as TypographyProps,
            },
            hr: {
              component: Divider,
              props: {} as DividerProps,
            },
            image: {
              component: Image,
              props: {
                height: 50,
                layout: 'fill',
                objectFit: 'contain',
                width: '100%',
              } as ImageProps,
            },
            img: {
              component: Image,
              props: {
                height: 50,
                layout: 'responsive',
                objectFit: 'contain',
                width: '100%',
              } as ImageProps,
            },
            p: {
              component: Typography,
              props: {
                component: 'p',
                sx: {
                  marginBottom: '0.25rem',
                },
                variant: 'body1',
              } as TypographyProps,
            },
            table: {
              component: Table,
              props: {} as TableProps,
            },
            tbody: {
              component: TableBody,
            },
            thead: {
              component: TableHead,
            },
            tr: {
              component: TableRow,
            },
            th: {
              component: TableCell,
            },
            td: {
              component: TableCell,
            },
          },
        }}
      />
    </Box>
  );
};

export default Markdown;
