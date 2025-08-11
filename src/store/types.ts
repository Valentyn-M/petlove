// Users Slice

export interface User {
  name: string | null;
  email: string | null;
  avatar: string | null;
  phone: string | null;
}

//---------------------------------------------------

// We send to backend
export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

// We get from backend
export interface RegisterResponse {
  email: string;
  name: string;
  token: string;
}

//---------------------------------------------------

// We send to backend
export interface LoginCredentials {
  email: string;
  password: string;
}

// We get from backend
export interface LoginResponse {
  email: string;
  name: string;
  token: string;
}

//---------------------------------------------------

// We get from backend on request "refreshUser"
export type Notice = {
  _id: string;
  species: string;
  category: string;
  title: string;
  name: string;
  birthday: string;
  comment: string;
  sex: string;
  location: string;
  imgURL: string;
  createdAt: string;
  updatedAt: string;
  user: string;
  popularity: number;
};

export interface RefreshUserResponse {
  _id: string;
  name: string;
  email: string;
  token: string;
  noticesFavorites: Notice[];
}

//---------------------------------------------------

// We get from backend on request "getFullUserInfo"
export interface Pet {
  _id: string;
  name: string;
  title: string;
  imgURL: string;
  species: string;
  birthday: string;
  sex: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetFullUserInfoResponse {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  phone: string;
  token: string;
  noticesViewed: Notice[];
  noticesFavorites: Notice[];
  pets: Pet[];
  createdAt: string;
  updatedAt: string;
}

//---------------------------------------------------

// User edit

// We send to backend
export interface UserData {
  name?: string;
  email?: string;
  phone?: string;
  avatar?: string;
}

//---------------------------------------------------

// Add pet

// We send to backend
export interface UserPet {
  name: string;
  title: string;
  imgURL: string;
  species: string;
  birthday: string;
  sex: string;
}

// ==========================================================================================================================

// News Slice
export interface NewsItem {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
  id: string;
}

export interface NewsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: NewsItem[];
}

export interface FetchNewsParams {
  searchValue?: string;
}

// ==========================================================================================================================

// Friends Slice

export interface WorkDaysItem {
  _id: string;
  isOpen: boolean;
  from?: string;
  to?: string;
}

export interface FriendsItem {
  _id: string;
  title: string;
  url: string;
  addressUrl: string | null;
  imageUrl: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  workDays: WorkDaysItem[] | null;
}

export type FriendsResponse = FriendsItem[];

// ==========================================================================================================================

// Cities

export interface City {
  _id: string;
  useCounty: string;
  stateEn: string;
  cityEn: string;
  countyEn: string;
}

export type CitiesResponse = City[];

// ==========================================================================================================================

// Notices Slice
export interface NoticesItem {
  _id: string;
  species: string;
  category: string;
  price?: number;
  title: string;
  name: string;
  birthday: string;
  comment: string;
  sex: string;
  location: string;
  imgURL: string;
  createdAt: string;
  user: string;
  popularity: number;
  updatedAt?: string;
}

export interface NoticesResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: NoticesItem[];
}

export interface FetchNoticesParams {
  keyword?: string;
  category?: string;
  species?: string;
  sex?: string;
  locationId?: string;
  byPrice?: boolean;
  byPopularity?: boolean;
  page?: number;
  limit?: number;
}

// ==========================================================================================================================

// NoticeDetails Slice

export interface NoticeLocation {
  _id: string;
  stateEn: string;
  cityEn: string;
}

export interface NoticeUser {
  _id: string;
  email: string;
  phone: string;
}

export interface NoticeDetailsResponse {
  _id: string;
  species: string;
  category: string;
  price?: number;
  title: string;
  name: string;
  birthday: string;
  comment: string;
  sex: string;
  location: NoticeLocation;
  imgURL: string;
  createdAt: string;
  user: NoticeUser;
  popularity: number;
  updatedAt: string;
}

// ==========================================================================================================================
