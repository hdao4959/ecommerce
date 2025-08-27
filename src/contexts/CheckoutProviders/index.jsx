import DistrictsProvider from "./DistrictsProvider"
import ListItemProvider from "./ListItemProvider"
import ProvincesProvider from "./ProvincesProvider"
import WardProvider from "./WardsProvider"
import ItemMapProvider from "./ItemMapProvider"
import FormProvider from "./FormProvider"
import MarkerProvider from "./MarkerProvider"
const CheckoutProviders = ({ children }) => {
  return <ProvincesProvider>
    <DistrictsProvider>
      <WardProvider>
        <ListItemProvider>
          <ItemMapProvider>
            <FormProvider>
              <MarkerProvider>
                {children}
              </MarkerProvider>
            </FormProvider>
          </ItemMapProvider>
        </ListItemProvider>
      </WardProvider>
    </DistrictsProvider>
  </ProvincesProvider>
}
export default CheckoutProviders