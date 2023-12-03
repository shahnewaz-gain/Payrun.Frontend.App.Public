import { size } from 'lodash';
import { AppNothingToShow } from '@/helpers/ui';

const AppDataTable = ({
  columns,
  data,
  showHeader = true,
  height = 'h-[47rem]',
  customSize = 'font-normal text-14 text-border',
  options: { isInitialLoading = false } = {}
}) => (
  <div className="flex flex-col overflow-hidden justify-center bg-white rounded-xl">
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-x-auto no-scrollbar w-full px-1 ${height}`}
    >
      <table className="w-full text-left ">
        {showHeader && (
          <thead className="sticky top-0 z-10 rounded-t-2xl bg-white-light">
            <tr>
              {columns?.map((column) => {
                const { key, header } = column;
                const isActionColumn = ['action', 'actions'].includes(key);

                if (column.isShow !== false && !(isActionColumn && isInitialLoading)) {
                  return (
                    <th
                      scope="col"
                      className={`px-6 ${customSize} py-6 ${isActionColumn && 'text-end'}`}
                      key={key}
                    >
                      {header || ''}
                    </th>
                  );
                }
                return '';
              })}
            </tr>
          </thead>
        )}
        <tbody>
          {(() => {
            if (!isInitialLoading && size(data)) {
              return data?.map((rowData, rowIndex) => (
                <tr
                  className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-white-light'}`}
                  key={rowData?.id}
                >
                  {columns?.map(
                    (column) =>
                      column.isShow !== false && (
                        <td
                          className={`px-6 py-4 font-medium text-gray-900 ${
                            (column.key === 'action' || column.key === 'actions') && 'text-end'
                          }`}
                          key={column.key}
                        >
                          {column.render ? column.render(rowData) : rowData[column.key]}
                        </td>
                      )
                  )}
                </tr>
              ));
            }
            return (
              <tr className="bg-white">
                <td colSpan={size(columns)} className="text-center">
                  <AppNothingToShow loading={isInitialLoading} spinnerClass="p-40" />
                </td>
              </tr>
            );
          })()}
        </tbody>
      </table>
    </div>
  </div>
);

export default AppDataTable;
