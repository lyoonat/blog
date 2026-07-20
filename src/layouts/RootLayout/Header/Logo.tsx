import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.profile.name}>
      <img
        src={CONFIG.profile.image}
        alt={CONFIG.profile.name}
        width={40}
        height={40}
        style={{ borderRadius: "50%" }}
      />
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)`
  display: flex;
  align-items: center;
`
