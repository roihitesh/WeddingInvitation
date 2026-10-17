import { StoryPageConfig } from '../types/invitation';

/**
 * Configuration and localization content for Page 4: Our Love Story — Hitesh & Shivanee.
 * Structured to allow editing, reordering, adding real couple photos, or toggling milestone visibility.
 */
export const defaultStoryPageConfig: StoryPageConfig = {
  title: {
    en: 'Our Story',
    hi: 'हमारी कहानी',
  },
  intro: {
    en: 'Every forever begins somewhere. Ours began with a meeting, grew through little moments, found its voice in unspoken feelings, and became a promise for a lifetime.',
    hi: 'हर हमेशा की शुरुआत कहीं न कहीं से होती है। हमारी कहानी एक मुलाकात से शुरू हुई, छोटी-छोटी यादों से आगे बढ़ी, दिल की बातों से गहरी हुई और फिर उम्रभर साथ निभाने के वादे तक पहुँच गई।',
  },
  milestones: [
    {
      id: 'first-meeting',
      order: 1,
      markerType: 'floral',
      heading: {
        en: 'When We First Met',
        hi: 'वो पहली मुलाकात',
      },
      story: {
        en: 'Every beautiful story has a beginning. Ours began with a simple meeting that would become the first page of something truly special.',
        hi: 'कहानी की शुरुआत एक छोटी-सी मुलाकात से हुई। तब कहाँ पता था कि यही पल हमारी ज़िंदगी की सबसे खूबसूरत कहानी का पहला पन्ना बन जाएगा।',
      },
      primaryPhoto: {
        id: 'photo-first-meeting',
        alt: {
          en: 'Hitesh and Shivanee - When We First Met',
          hi: 'हितेश और शिवानी - वो पहली मुलाकात',
        },
        caption: {
          en: 'Where the chapter of a lifetime opened its first page',
          hi: 'जहाँ से ज़िंदगी के सबसे प्यारे अध्याय की शुरुआत हुई',
        },
        symbolicType: 'first-meeting',
      },
      isVisible: true,
    },
    {
      id: 'first-crush',
      order: 2,
      markerType: 'heart',
      heading: {
        en: 'Those First Butterflies',
        hi: 'पहला क्रश, पहली धड़कन',
      },
      story: {
        en: 'Then came the little smiles, the stolen glances, and the butterflies that appeared whenever we were near each other. Something special was quietly beginning.',
        hi: 'वो चुपके से देखना, बिना वजह मुस्कुराना और सामने आते ही दिल का थोड़ा तेज़ धड़कना। शायद यही वो एहसास था, जब दोस्ती से कुछ खूबसूरत शुरू होने लगा।',
      },
      primaryPhoto: {
        id: 'photo-first-crush',
        alt: {
          en: 'Those First Butterflies - Smiles and Stolen Glances',
          hi: 'वो पहली धड़कन - मंद मुस्कान और आँखों की बातें',
        },
        caption: {
          en: 'The quiet magic of feelings that needed no words',
          hi: 'बिना कहे समझ आने वाला एक अनूठा, प्यारा सा एहसास',
        },
        symbolicType: 'first-crush',
      },
      isVisible: true,
    },
    {
      id: 'sharing-feelings',
      order: 3,
      markerType: 'intertwined',
      heading: {
        en: 'When Our Hearts Spoke',
        hi: 'जब दिल ने दिल की बात कही',
      },
      story: {
        en: 'Little by little, the feelings we had kept inside found their way into words. What once felt like a secret became something we could finally share with each other.',
        hi: 'जो बातें कभी दिल में छुपी रहती थीं, एक दिन जुबां तक आ गईं। अपने एहसास बाँटते हुए समझ आया कि शायद हम दोनों के दिल एक ही कहानी कह रहे थे।',
      },
      primaryPhoto: {
        id: 'photo-sharing-feelings',
        alt: {
          en: 'When Our Hearts Spoke - Meaningful Connection',
          hi: 'जब दिल ने दिल की बात कही - दो दिलों का एक सुर',
        },
        caption: {
          en: 'When silence turned into confidences and lifelong trust',
          hi: 'दो रूहों का वो संवाद, जिसने सारे संशय मिटा दिए',
        },
        symbolicType: 'sharing-feelings',
      },
      isVisible: true,
    },
    {
      id: 'trips-memories',
      order: 4,
      markerType: 'travel',
      heading: {
        en: 'Little Trips, Big Memories',
        hi: 'सफ़र, शरारतें और ढेर सारी यादें',
      },
      story: {
        en: 'Every trip gave us a new story, every adventure brought us closer, and every little moment became a memory worth keeping. The best part was never just the destination; it was being together.',
        hi: 'कभी नई जगहों की सैर, कभी बेवजह की हँसी और कभी रास्तों में ही बनती खूबसूरत यादें। हर सफ़र ने हमें एक-दूसरे के और करीब ला दिया।',
      },
      primaryPhoto: {
        id: 'photo-trip-main',
        alt: {
          en: 'Little Trips, Big Memories - Traveling Together',
          hi: 'सफ़र और यादें - साथ में बिताए खुशनुमा पल',
        },
        caption: {
          en: 'New horizons, endless laughter, and cherished paths',
          hi: 'मंज़िलों से खूबसूरत वो रास्ते जो हमने साथ तय किए',
        },
        symbolicType: 'trip-main',
      },
      additionalPhotos: [
        {
          id: 'photo-trip-snap-1',
          alt: {
            en: 'Road trips and sunny vistas',
            hi: 'सफ़र की सुनहरी धूप और मीठी यादें',
          },
          caption: {
            en: 'Golden horizons & shared playlists',
            hi: 'हवाओं में तैरती हँसी',
          },
          symbolicType: 'trip-snapshot-1',
        },
        {
          id: 'photo-trip-snap-2',
          alt: {
            en: 'Starlit evenings and scenic stops',
            hi: 'तारों की छाँव और सुकून भरे पल',
          },
          caption: {
            en: 'Evenings made of peace and coffee',
            hi: 'शाम की शांत चाय और अनगिनत बातें',
          },
          symbolicType: 'trip-snapshot-2',
        },
      ],
      isVisible: true,
    },
    {
      id: 'choosing-forever',
      order: 5,
      markerType: 'lotus',
      heading: {
        en: 'A Decision for Forever',
        hi: 'हमसफ़र बनने का फ़ैसला',
      },
      story: {
        en: "Somewhere along the way, we knew we wanted to choose each other, not just for today but for all the days ahead. With our families' love and blessings, our dream of a life together began to take shape.",
        hi: 'धीरे-धीरे यह एहसास यक़ीन में बदल गया कि हमें ज़िंदगी भर एक-दूसरे का साथ निभाना है। परिवार के प्यार, सहमति और आशीर्वाद के साथ हमारे इस रिश्ते ने एक नई दिशा पाई।',
      },
      primaryPhoto: {
        id: 'photo-family-blessings',
        alt: {
          en: 'A Decision for Forever - Family Blessings & Love',
          hi: 'हमसफ़र बनने का फ़ैसला - परिवार का पावन आशीर्वाद',
        },
        caption: {
          en: 'Two families uniting in shared joy, grace, and blessings',
          hi: 'बड़ों का मंगल आशीर्वाद और दोनों परिवारों का स्नेहिल मिलन',
        },
        symbolicType: 'family-blessings',
      },
      isVisible: true,
    },
    {
      id: 'tying-the-knot',
      order: 6,
      markerType: 'wedding-knot',
      heading: {
        en: 'And Then, Forever Begins',
        hi: 'और अब, सात जन्मों का साथ',
      },
      story: {
        en: 'From that first meeting to this beautiful new beginning, every step has brought us here. With our families beside us and their blessings in our hearts, we are ready to tie the knot and begin our forever together.',
        hi: 'पहली मुलाकात से लेकर इस खूबसूरत मुकाम तक, हर पल हमें यहाँ ले आया। परिवार के आशीर्वाद और अपनों के प्यार के साथ, अब हम विवाह के पवित्र बंधन में बँधकर साथ चलने को तैयार हैं।',
      },
      primaryPhoto: {
        id: 'photo-tying-knot',
        alt: {
          en: 'And Then, Forever Begins - The Sacred Union',
          hi: 'और अब, सात जन्मों का साथ - पवित्र विवाह गठबंधन',
        },
        caption: {
          en: 'Stepping into the sacred circle of love and devotion',
          hi: 'सात फेरों के पावन वचनों के साथ एक नई दुनिया की शुरुआत',
        },
        symbolicType: 'tying-knot',
      },
      isVisible: true,
    },
  ],
  closing: {
    quote: {
      en: 'From our first hello to our forever, every chapter has led us here.',
      hi: 'पहली मुलाकात से उम्रभर के साथ तक, हमारी हर कहानी हमें इसी खूबसूरत मुकाम तक लाई है।',
    },
    coupleNames: 'Hitesh & Shivanee',
    ctaText: {
      en: 'Explore Our Celebrations →',
      hi: 'विवाह समारोह देखें →',
    },
    celebrationFeedback: {
      en: 'Auspicious celebrations, ceremonies, and venue itineraries will be revealed in the next chapter!',
      hi: 'शुभ मांगलिक कार्यक्रम, रस्में एवं समय सारिणी अगले अध्याय में शीघ्र प्रकाशित की जाएगी!',
    },
  },
};
