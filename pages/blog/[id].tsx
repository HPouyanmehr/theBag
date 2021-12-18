// react
import { Box, BoxProps, Typography, styled } from '@mui/material';
import Markdown from 'components/common/Markdown';
import MainLayout from 'components/layout/MainLayout';
import * as React from 'react';
// type
interface BlogPostProps {}

const CustomContainer = styled(Box)<BoxProps>(({ theme }) => ({
  margin: '5rem 1rem 1rem',
  [theme.breakpoints.up('sm')]: {
    margin: '5rem 2rem 1rem',
  },
}));

const BlogPost: React.FunctionComponent<BlogPostProps> = (props) => {
  return (
    <MainLayout>
      <CustomContainer>
        <Typography component="h1" textAlign="center" variant="h3">
          Post title
        </Typography>
        <Typography
          color="text.secondary"
          component="p"
          textAlign="center"
          variant="body1"
        >
          Read time - Published at date
        </Typography>
        <Markdown
          content={`# Heading level 1

## Heading level 2

### Heading level 3

#### Heading level 4

##### Heading level 5

###### Heading level 6

A **paragraph**: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, numquam ipsam. Quidem dolor beatae eius doloremque delectus deserunt veniam necessitatibus!

I am a sentence containing  
line break or <br>

I use **bold text** here. (<strong></strong>)
Italicized text is the _cat's meow_. (<em></em>)

This text is **_bold and italic_**.

> This is a blockquote
>
> > This is a nested blockquote

> #### This is combination of blockquote and other elements
>
> - first item of a list.
> - second item of a list.
>
>   _Italic_ or **bold**.

### ordered list

1. First item
2. Second item
3. Third item
   1. Indented item
   2. Indented item
4. Fourth item

### unordered list

- First item
- Second item
- Third item
- Fourth item

### pre block

<pre>Hi, I am haj hosein This is equal to pre block in html.</pre>

### images

![freelancer](/sections/freelancer-male.svg)

### Horizontal Rule

---

### Links

This is a [mopeim](https://mopeim.com) template.

### Sample Table

| Column A | Column B | Column C |
| -------- | -------- | -------- |
| A1       | B1       | C1       |
| A2       | B2       | C2       |
| A3       | B3       | C3       |
`}
          sx={{ display: 'flex', justifyContent: 'center' }}
        />
      </CustomContainer>
    </MainLayout>
  );
};

export default BlogPost;
