export const goToLogin = (navigate)=>{
  navigate("/login")
  window.location.reload();
}
export const goToSignUp = (navigate)=>{
  navigate("/signup")
}
export const goToSignUpAdress = (navigate)=>{
  navigate("/signup/address")
}
export const goToHome = (navigate)=>{
  navigate("/home")
  window.location.reload();
}
export const goToRestDetail = (navigate,id)=>{
  navigate(`/restaurant/${id}`)
}

export const goToCart = (navigate)=>{
  navigate("/cart")
}
export const goToUserProfile = (navigate)=>{
  navigate("/profile")
}
export const goToEditProfile = (navigate)=>{
  navigate("/editProfile")
}
export const goToEditAddress = (navigate)=>{
  navigate("/editAddress")
}
export const goBack = (navigate)=>{
  navigate(-1)
}

