import React from "react";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";
import {
  IconDownTwo,
  IconNotes,
  IconReview,
  IconShare,
  IconStar,
} from "@assets";
import { Link } from "react-router-dom";

const BookImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  .book-image {
    width: 190px;
    height: 250px;
    border: 1px solid #333;
  }
`;
const ActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
  cursor: pointer;
  &:hover {
    color: #fa7c54;
  }
  div {
    margin-right: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    font-size: 11px;
    color: #333333;
  }
`;

const ActionIcon = styled.img`
  width: 20px;
  height: 20px;
  -webkit-mask: url(${(props) => props.icon}) no-repeat center;
  mask: url(${(props) => props.icon}) no-repeat center;
  background-color: ${(props) =>
    props.color ? props.color : "var(--secondary-color)"};

  &:hover {
    color: #fa7c54;
    background-color: #fa7c54;
    /* color: var(--primary-color); */
    /* background-color: var(--primary-color); */
  }
`;
const BookDescription = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  .book-title {
    font-size: 35px;
    font-weight: 400;
    color: #4d4d4d;
    margin-bottom: 5px;
    text-transform: capitalize;
  }
  .book-author {
    font-size: 15px;
    font-weight: 400;
    color: #4d4d4d;
    margin-bottom: 10px;
    span {
      text-decoration: underline;
    }
  }
  .cetakan {
    font-size: 15px;
    font-weight: 400;
    color: #9a9a9a;
    margin-bottom: 20px;
  }
  .book-information {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 35px;
  }
  .rating-text {
    font-size: 14px;
    font-weight: 500;
    color: #4d4d4d;
    margin-left: 15px;
    margin-right: 15px;
  }
  .rating-star {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
      width: 14px;
      height: 14px;
    }
  }
  .desc-button {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 50px;
  }

  .preview-text {
    font-size: 14px;
    font-weight: 600;
    color: #666666;
    margin-bottom: 25px;
    span {
      color: #f27851;
    }
  }

  .desc-text {
    font-size: 13px;
    font-weight: 400;
    color: #333333;
    margin-bottom: 15px;

    span {
      color: #f27851;
    }
  }
`;

const ReadButton = styled(Link)`
  background-color: #f27851;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 175px;
  height: 45px;
  color: white;
  font-weight: bold;
  font-size: 14px;
  margin-right: 120px;
`;

const AddToListButton = styled(Link)`
  display: flex;
  justify-content: space-between;
  background-color: #4d4d4d;
  border-radius: 5px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 16px;
  padding-right: 16px;
  color: white;
  font-weight: normal;
  font-size: 13px;
`;

const BookInformation = styled.div`
  width: 500px;
  background-color: #fff;
  padding: 29px 40px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  h3 {
    color: #4d4d4d;
    font-weight: 600;
    font-size: 22px;
  }

  h4 {
    color: #4d4d4d;
    font-weight: 600;
    font-size: 14px;
    margin-top: 20px;
  }

  .published-value {
    color: #4d4d4d;
    font-weight: 600;
    font-size: 12px;
  }
`;

const BookInformationValue = styled.div`
  margin-top: 40px;
  margin-bottom: 9px;
  h3 {
    margin-top: 20px;
    font-size: 14px;
    color:#4D4D4D;
    font-weight: 600;
    margin-bottom: 5px;
  }
  .edition-notes-label {
    font-weight: 600;
    font-size: 11px;
    color: #4D4D4D;
    width: 100px;
    max-width: 100px;
    margin-right: 35px;
  }
  .edition-notes-value {

    font-weight: 600;
    font-size: 11px;
    color: #4D4D4D;
    flex: 1;
  }
  .edition-notes-genre {
    font-weight: 600;
    font-size: 10px;
    color: #4D4D4D;
    flex: 1;
    
  }
  h4 {
    font-size: 13px;
    color: #666666;
    font-weight: 600;
    margin-bottom:9px;
  }
  div {
    margin-bottom: 9px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .label {
    font-weight: 600;
    font-size: 12px;
    color: #666666;
    width: 100px;
    max-width: 100px;
    margin-right: 35px;
  }
  .value {
    flex: 1;
    font-weight: 600;
    font-size: 12px;
    color: #333333;
  }
`;

const BookDetailComponent = ({ data }) => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <BookImage>
            <img className="book-image" src={data?.image} />
            <ActionWrapper>
              <div>
                <ActionIcon icon={IconReview} color="#000000" />
                <p>Review</p>
              </div>
              <div>
                <ActionIcon icon={IconNotes} color="#000000" />
                <p>Notes</p>
              </div>
              <div>
                <ActionIcon icon={IconShare} color="#000000" />
                <p>Share</p>
              </div>
            </ActionWrapper>
          </BookImage>
        </Grid>
        <Grid item md={9}>
          <BookDescription>
            <p className="book-title">{data?.Title ?? "Don’t Make Me Think"}</p>
            <p className="book-author">
              By <span>{data?.author ?? "Steve Krug"}</span>, 2000
            </p>
            <p className="cetakan">Second Edition</p>
            <div className="book-information">
              <div className="rating-star">
                <img src={IconStar} />
                <img src={IconStar} />
                <img src={IconStar} />
                <img src={IconStar} />
                <img src={IconStar} />
              </div>
              <p className="rating-text">5.0 Ratings</p>
              <p className="rating-text">25 Currently reading</p>
              <p className="rating-text">119 Have read</p>
            </div>
            <div className="desc-button">
              <ReadButton to="">Baca Buku</ReadButton>
              <AddToListButton to="">
                <p>Add to List</p>
                <ActionIcon icon={IconDownTwo} color="#fff" />
              </AddToListButton>
            </div>
            <p className="preview-text">
              Previews available in: <span>English</span>
            </p>
            <p className="desc-text">
              Since Don’t Make Me Think was first published in 2000, hundreds of
              thousands of Web designers and developers have relied on usability
              guru Steve Krug’s guide to help them understand the principles of
              intuitive navigation and information design. Witty,
              commonsensical, and eminently practical, it’s one of the
              best-loved and most... <span> Read more</span>
            </p>

            <BookInformation>
              <h3>Book Details</h3>
              <h4>Published in</h4>
              <p className="published-value">United States</p>
              <BookInformationValue>
              <h3>Edition Notes</h3>
                <div>
                  <p className="edition-notes-label">Series</p>
                  <p className="edition-notes-label">Dover large print classics</p>
                </div>
                <div>
                  <p className="edition-notes-label">Genre</p>
                  <p className="edition-notes-genre">Fiction.</p>
                </div>
              </BookInformationValue>
              
           
              <BookInformationValue>
                <h4>Classifications</h4>
                <div>
                  <p className="label">Dewey Decimal Class</p>
                  <p className="value">823/.8</p>
                </div>
                <div>
                  <p className="label">Library of Congress</p>
                  <p className="value">PR5485 .A1 2002</p>
                </div>
              </BookInformationValue>

              <BookInformationValue>
                <h4>The Physical Object</h4>
                <div>
                  <p className="label">Pagination</p>
                  <p className="value">ix, 112p. (large print);</p>
                </div>
                <div>
                  <p className="label">Number of pages</p>
                  <p className="value">216</p>
                </div>
              </BookInformationValue>
              <BookInformationValue>
                <h4>ID Numbers</h4>
                <div>
                  <p className="label">My Book Shelf</p>
                  <p className="value">OL3570252M</p>
                </div>
                <div>
                  <p className="label">ISBN 10</p>
                  <p className="value">0486424715</p>
                </div>
                <div>
                  <p className="label">LCCN</p>
                  <p className="value">2002073560</p>
                </div>
                <div>
                  <p className="label">Library Thing</p>
                  <p className="value">12349</p>
                </div>
                <div>
                  <p className="label">Goodreads</p>
                  <p className="value">690668</p>
                </div>
              </BookInformationValue>
            </BookInformation>
          </BookDescription>
        </Grid>
      </Grid>
      {/* <BookDetailWrapper>
        <BookImage>image</BookImage>
        <BookDescription>description</BookDescription>
      </BookDetailWrapper> */}
    </React.Fragment>
  );
};

export default BookDetailComponent;
