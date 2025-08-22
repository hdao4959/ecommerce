import DistrictsProvider from "./DistrictsProvider"
import ProvincesProvider from "./ProvincesProvider"
import WardProvider from "./WardProvider"

const CheckoutProviders = ({ children }) => {
  return <ProvincesProvider>
    <DistrictsProvider>
      <WardProvider>
      {children}
      </WardProvider>
    </DistrictsProvider>
  </ProvincesProvider>
}
export default CheckoutProviders