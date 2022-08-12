import { forwardRef, useRef } from "react";
import UserDebtTable from '../../components/tables/user-debts-list';
import { Printer } from 'lucide-react';
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import { useTranslation } from "react-i18next";

const ComponentToPrint = forwardRef((props, ref) => {
  return <div ref={ref}><UserDebtTable /></div>;
});

export default function UserDebts() {
  const { t } = useTranslation()
  const ref = useRef();
  return (
    <div>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>{t('admin.user_debts.title')}</h1>
        <ReactToPrint content={() => ref.current}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <span className="btn print">
                <Printer onClick={handlePrint} />
              </span>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
      </header>
      <ComponentToPrint ref={ref} />
    </div>
  )
}