import React from 'react';
import Title from '../title/title';
import Video from '../video/video';
import Image from '../image/image';
import Text from '../text/text';
import { makeStyles } from '@material-ui/core/styles';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Chapter, ContentType } from '@gerdesque/data';
import { API_URL, IMAGE_SUFFIX } from '@gerdesque/data';

import './chapter.scss';

export const ChapterComponent = (props: Chapter) => {
  const useStyles = makeStyles(() => ({
    chapter: {
      backgroundImage: `url(${API_URL+"/"+props.link+IMAGE_SUFFIX})`,
      boxShadow: '0 0 8px 8px #dcd5cc inset',
      },
  }));
  const classes = useStyles();

  const renderChapterGroups = () => {
    return props.groups.map((group, index) => 
    <div key={index} className='parallax__group'>
      {group.content && renderChapterContent(group.content)}
    </div>)
  }

  const renderChapterContent = (contentList) => {
    return contentList.map((content, index) =>
      <div key={index} className='parallax__group'>
        <div className={`parallax__layer parallax__layer--${content.layer}`}>
          {content.type === ContentType.Text && <Text value={content.value} />}
          {content.type === ContentType.Video && <Video value={content.value} />}
          {content.type === ContentType.Image && <Image value={content.value} />}
        </div>
      </div>)
  }

  return (
    <div className='parallax'>
      <div className='parallax__group'>
        <div className={`parallax__layer parallax__layer--base ${classes.chapter}`}>
          <Title text={props.name} />
        </div>
      </div>
      {props.groups && renderChapterGroups()}
      </div>
  );
};
