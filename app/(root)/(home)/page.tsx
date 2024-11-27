import Filters from '@/components/Filters';
import Header from '@/components/Header';
import ResourceCard from '@/components/ResourceCard';
import SearchForm from '@/components/SearchForm';
import { getResources, getResourcesPlaylist } from '@/sanity/actions';

export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Page = async ({ searchParams }: Props) => {
  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1',
  });

  const resourcesPlaylist = await getResourcesPlaylist();

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      {/* Banner Section */}
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <p className="text-3xl font-bold text-gradient_blue-purple">
            Strong analytical and problem-solving skills demonstrated through impactful projects.
            Experienced in team collaboration and process optimization, with a focus on fostering teamwork
            and continuous learning. Currently pursuing a graduate degree in Computer Engineering at Vellore Institute of Technology.
          </p>
        </div>
        <SearchForm />
      </section>

      {/* Filters Section */}
      <Filters />

      {/* Filtered Resources Section */}
      {(searchParams?.query || searchParams?.category) && (
        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <Header
            query={searchParams?.query || ''}
            category={searchParams?.category || ''}
          />

          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {resources?.length > 0 ? (
              resources.map((resource: any) => (
                <ResourceCard
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadLink={resource.downloadLink}
                  description={resource.description || ''}
                />
              ))
            ) : (
              <p className="body-regular text-white-400"></p>
            )}
          </div>
        </section>
      )}

      {/* Resources Playlist Section */}
      {resourcesPlaylist?.length > 0 ? (
        resourcesPlaylist.map((item: any) => (
          <section
            key={item._id}
            className="flex-center mt-6 w-full flex-col sm:mt-20"
          >
            <h1 className="heading3 self-start text-white-800">{item.title}</h1>
            <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
              {item.resources.map((resource: any) => (
                <ResourceCard
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadLink={resource.downloadLink}
                  description={resource.description || ''}
                />
              ))}
            </div>
          </section>
        ))
      ) : (
        <p className="body-regular text-white-400 mt-12">
          No playlists available.
        </p>
      )}
    </main>
  );
};

export default Page;
