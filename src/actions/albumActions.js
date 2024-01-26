"use server";

import { cookies } from "next/headers";
import client from "./db";

export const fetchAlbumsByUserId = async () => {
  const userId = Number(cookies().get("userId")?.value);

  if (!userId) {
    return [];
  }

  const sql = `
  SELECT * FROM albums 
    JOIN photos ON photos.id = albums.cover_id 
    WHERE albums.user_id = ?`;
  const args = [userId];

  const albums = await client.execute({ sql, args });

  return albums.rows;
};

export const fetchPhotosFromAlbumByAlbumId = async (albumId) => {
  const userId = Number(cookies().get("userId")?.value);

  if (!userId) {
    return [];
  }

  const sql = `
  SELECT * FROM photos 
    WHERE photos.album_id = ?
    AND user_id = ?`;
  const args = [albumId, userId];

  const photos = await client.execute({ sql, args });

  console.log("photos");
  console.log(photos);

  return photos.rows;
};
