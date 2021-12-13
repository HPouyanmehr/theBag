// react
import * as React from 'react';
// next
import Image, { ImageProps } from 'next/image';
// markdown-to-jsx
import MTJMarkdown from 'markdown-to-jsx';
// @mui
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableProps,
  TableRow,
  Typography,
  TypographyProps,
} from '@mui/material';
// type
interface MarkdownProps {
  content?: string;
  sx?: React.CSSProperties;
}

const Markdown: React.FunctionComponent<MarkdownProps> = (props) => {
  const { content = '**No Content**', sx } = props;

  return (
    <Box sx={sx}>
      <MTJMarkdown
        children={content}
        options={{
          overrides: {
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
