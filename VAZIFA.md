# Vazifa (videoning oxirida berilgan — keyin qilamiz)

## 1-vazifa: 🎬 Kino streaming — `MovieController` MongoDB bilan

`BaseController extends`, `constructor`'da bind, har metodda `try/catch` + `AppError`:

- `getAll` — `GET /movies?genre=sci-fi&search=incep` (`genre` — aniq moslik, `search` — `title` bo'yicha qidiruv)
- `getOne` — `GET /movies/:id`
- `create` — `POST /movies` `{ title, year, genre, rating }`
- `update` — `PATCH /movies/:id`
- `remove` — `DELETE /movies/:id`

```
POST /movies
Body: { "title": "Inception", "year": 2010, "genre": "sci-fi", "rating": 8.8 }
Response 201: { "_id": "...", "title": "Inception", ... }
```

## 2-vazifa: 🏨 Hotel — `RoomController` va `BookingController` MongoDB bilan

`RoomController`:

- `getAll` — `GET /rooms?type=lux&available=true&search=lu` (`type`, `available` — aniq moslik, `search` — `type` bo'yicha qidiruv)
- `getOne` — `GET /rooms/:id`
- `create` — `POST /rooms`
- `update` — `PATCH /rooms/:id` (istalgan maydonni yangilaydi)
- `remove` — `DELETE /rooms/:id`

`BookingController`:

- `getAll` — `GET /bookings?status=confirmed&search=ali` (`status` — aniq moslik, `search` — `guestName` bo'yicha qidiruv)
- `create` — `POST /bookings` `{ roomId, guestName, checkIn, checkOut }`
- `getOne` — `GET /bookings/:id`
- `cancel` — `PATCH /bookings/:id/cancel`

**Talab:** Ikkalasi ham `BaseController extends`, `constructor`'da bind.
